import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  const studentId = request.nextUrl.searchParams.get('student_id');

  let query = supabase.from('sessions').select('*').order('date', { ascending: false });
  if (studentId) {
    query = query.eq('student_id', studentId);
  }

  const { data, error } = await query;

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { data, error } = await supabase
    .from('sessions')
    .insert({
      student_id: body.student_id,
      date: body.date,
      duration: body.duration,
      topic: body.topic,
      homework: body.homework ?? null,
      archive_ref: body.archive_ref ?? null,
      grade: body.grade ?? null,
      notes: body.notes ?? null,
    })
    .select()
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(data, { status: 201 });
}
