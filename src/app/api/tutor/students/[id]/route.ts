import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  const [studentRes, sessionsRes, paymentsRes] = await Promise.all([
    supabase.from('students').select('*').eq('id', id).single(),
    supabase.from('sessions').select('*').eq('student_id', id).order('date', { ascending: false }),
    supabase.from('payments').select('*').eq('student_id', id).order('date', { ascending: false }),
  ]);

  if (studentRes.error) {
    return NextResponse.json({ error: studentRes.error.message }, { status: 404 });
  }
  if (sessionsRes.error) {
    return NextResponse.json({ error: sessionsRes.error.message }, { status: 500 });
  }
  if (paymentsRes.error) {
    return NextResponse.json({ error: paymentsRes.error.message }, { status: 500 });
  }

  return NextResponse.json({
    student: studentRes.data,
    sessions: sessionsRes.data ?? [],
    payments: paymentsRes.data ?? [],
  });
}

export async function PUT(request: NextRequest, { params }: RouteParams) {
  const { id } = await params;
  const body = await request.json();

  const { data, error } = await supabase
    .from('students')
    .update({
      name: body.name,
      level: body.level,
      day: body.day,
      session_time_start: body.session_time_start,
      session_time_end: body.session_time_end,
      rate: body.rate,
      discount: body.discount,
      notes: body.notes,
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function DELETE(_request: NextRequest, { params }: RouteParams) {
  const { id } = await params;

  await supabase.from('sessions').delete().eq('student_id', id);
  await supabase.from('payments').delete().eq('student_id', id);

  const { error } = await supabase.from('students').delete().eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({ success: true });
}
