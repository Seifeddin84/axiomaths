# Regenerates the SVG figures of the lessons (python scripts/lesson_figures.py).
# Requires: pip install numpy matplotlib
import numpy as np, matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
plt.rcParams.update({"mathtext.fontset":"cm","font.family":"serif","font.size":12,
  "axes.spines.top":False,"axes.spines.right":False,"svg.fonttype":"path"})
import os
OUT=os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "public", "lessons", "images") + os.sep
TEAL="#0d9488"; ORANGE="#ea580c"; GRAY="#6b7280"; BLUE="#2563eb"

# 1. sign of P(x)=(x-1)(2x+1)(x+2)
x=np.linspace(-2.8,1.6,600); P=(x-1)*(2*x+1)*(x+2)
fig,ax=plt.subplots(figsize=(7.5,4.2))
ax.axhline(0,color="black",lw=0.8)
ax.fill_between(x,P,0,where=P<0,color=TEAL,alpha=0.18,interpolate=True,label=r"$P(x)<0$")
ax.fill_between(x,P,0,where=P>0,color=ORANGE,alpha=0.15,interpolate=True,label=r"$P(x)>0$")
ax.plot(x,P,color="black",lw=2)
for r,lab in [(-2,r"$-2$"),(-0.5,r"$-\frac{1}{2}$"),(1,r"$1$")]:
    ax.plot(r,0,"o",color=ORANGE,ms=7,zorder=5); ax.annotate(lab,(r,0),xytext=(0,-22),textcoords="offset points",ha="center",fontsize=14)
ax.set_ylim(-9,7); ax.set_xlim(-2.8,1.6)
ax.set_title(r"$P(x)=2x^3+3x^2-3x-2=(x+2)(2x+1)(x-1)$",fontsize=13)
ax.legend(loc="upper left",frameon=False); ax.set_yticks([]); ax.set_xticks([])
fig.tight_layout(); fig.savefig(OUT+"polynomes-signe.svg"); plt.close(fig)

# 2. box volume
x=np.linspace(0,30,400); V=x*(60-2*x)**2
fig,ax=plt.subplots(figsize=(7.5,4.0))
ax.plot(x,V/1000,color=TEAL,lw=2.4)
ax.axhline(16,color=GRAY,ls="--",lw=1); ax.plot(10,16,"o",color=ORANGE,ms=8,zorder=5)
ax.annotate(r"maximum : $V(10)=16\,000\ \mathrm{cm^3}$",(10,16),xytext=(14,14.2),fontsize=12,arrowprops=dict(arrowstyle="->",color=GRAY))
ax.set_xlabel(r"$x$ (cm)"); ax.set_ylabel(r"$V(x)$ (en milliers de cm$^3$)")
ax.set_xlim(0,30); ax.set_ylim(0,18)
fig.tight_layout(); fig.savefig(OUT+"polynomes-boite.svg"); plt.close(fig)

# 3. polygone des effectifs cumulés croissants (chiffre d'affaires)
b=[100,150,200,250,300,350,400,450,500]; ecc=[0,4,9,15,22,32,40,46,50]
fig,ax=plt.subplots(figsize=(7.5,4.6))
ax.plot(b,ecc,"-o",color=TEAL,lw=2,ms=5)
for y,v,lab,col in [(12.5,229.17,r"$Q_1\approx229$",BLUE),(25,315,r"$M_e=315$",ORANGE),(37.5,384.4,r"$Q_3\approx384$",BLUE)]:
    ax.plot([100,v],[y,y],ls="--",color=col,lw=1); ax.plot([v,v],[0,y],ls="--",color=col,lw=1)
    ax.annotate(lab,(v,0),xytext=(4,6),textcoords="offset points",color=col,fontsize=12)
    ax.annotate(f"{y:g}".replace(".",","),(100,y),xytext=(4,3),textcoords="offset points",color=col,fontsize=10)
ax.set_xlim(100,500); ax.set_ylim(0,52); ax.set_xticks(b)
ax.set_xlabel("chiffre d'affaires (milliers de dinars)"); ax.set_ylabel("effectifs cumulés croissants")
ax.grid(alpha=0.25)
fig.tight_layout(); fig.savefig(OUT+"statistiques-ecc.svg"); plt.close(fig)

# 4. boîte à moustaches hémoglobine
fig,ax=plt.subplots(figsize=(7.5,2.6))
mn,q1,me,q3,mx=105,133,149.5,158,179
ax.add_patch(plt.Rectangle((q1,0.35),q3-q1,0.5,facecolor=TEAL,alpha=0.18,edgecolor=TEAL,lw=2))
ax.plot([me,me],[0.35,0.85],color=ORANGE,lw=3)
ax.plot([mn,q1],[0.6,0.6],color="black",lw=1.5); ax.plot([q3,mx],[0.6,0.6],color="black",lw=1.5)
for v in (mn,mx): ax.plot([v,v],[0.45,0.75],color="black",lw=1.5)
for v,lab in [(mn,"min\n105"),(q1,"$Q_1$\n133"),(me,"$M_e$\n149,5"),(q3,"$Q_3$\n158"),(mx,"max\n179")]:
    ax.text(v,1.0,lab,ha="center",va="bottom",fontsize=11)
ax.set_ylim(0.2,1.45); ax.set_xlim(100,184); ax.set_yticks([]); ax.spines["left"].set_visible(False)
ax.set_xlabel("taux d'hémoglobine (g/L)")
fig.tight_layout(); fig.savefig(OUT+"statistiques-boite.svg"); plt.close(fig)

# 5. nuage + point moyen + droite de Mayer
xe=np.array([5,7,9,9,10,10,11,12,13,14]); ye=np.array([6,7,8,10,11,13,10,13,12,16])
fig,ax=plt.subplots(figsize=(7.5,4.8))
ax.scatter(xe[:5],ye[:5],color=TEAL,s=45,label=r"sous-nuage $N_1$",zorder=3)
ax.scatter(xe[5:],ye[5:],color=BLUE,s=45,marker="s",label=r"sous-nuage $N_2$",zorder=3)
t=np.linspace(4,15,10); ax.plot(t,1.1*t-0.4,color=GRAY,lw=1.5,label=r"droite de Mayer $y=1{,}1x-0{,}4$")
for (gx,gy,lab) in [(8,8.4,"$G_1$"),(12,12.8,"$G_2$")]:
    ax.plot(gx,gy,"X",color="black",ms=9,zorder=4); ax.annotate(lab,(gx,gy),xytext=(-22,6),textcoords="offset points",fontsize=13)
ax.plot(10,10.6,"*",color=ORANGE,ms=17,zorder=5); ax.annotate(r"$G(10\,;\,10{,}6)$",(10,10.6),xytext=(10.9,8.4),fontsize=13,color=ORANGE,arrowprops=dict(arrowstyle="->",color=ORANGE))
ax.set_xlabel("note en économie $x_i$"); ax.set_ylabel("note en maths $y_i$")
ax.set_xlim(4,15); ax.set_ylim(4,17); ax.grid(alpha=0.25); ax.legend(loc="upper left",frameon=False,fontsize=10)
fig.tight_layout(); fig.savefig(OUT+"statistiques-nuage.svg"); plt.close(fig)

# 6. nuage pondéré appartements
T={2:[1,3,0],3:[0,2,1],4:[1,4,4],5:[2,1,2]}
fig,ax=plt.subplots(figsize=(6.5,4.2))
for xi,row in T.items():
    for yj,n in zip([2,3,4],row):
        if n: ax.scatter(xi,yj,s=160*n,color=TEAL,alpha=0.35,edgecolor=TEAL); ax.text(xi,yj,str(n),ha="center",va="center",fontsize=12)
ax.plot(78/21,66/21,"*",color=ORANGE,ms=17); ax.annotate(r"$G\left(\frac{78}{21}\,;\,\frac{66}{21}\right)$",(78/21,66/21),xytext=(10,8),textcoords="offset points",color=ORANGE,fontsize=13)
ax.set_xticks([2,3,4,5]); ax.set_yticks([2,3,4]); ax.set_xlim(1.4,5.6); ax.set_ylim(1.4,4.6)
ax.set_xlabel("nombre de personnes $x_i$"); ax.set_ylabel("nombre de pièces $y_j$"); ax.grid(alpha=0.25)
fig.tight_layout(); fig.savefig(OUT+"statistiques-nuage-pondere.svg"); plt.close(fig)

# 7. second degré : aire x(10-x)
x=np.linspace(0,10,400); a=x*(10-x)
fig,ax=plt.subplots(figsize=(7.5,4.2))
ax.plot(x,a,color=TEAL,lw=2.4)
ax.axhline(30,color=ORANGE,ls="--",lw=1.4); ax.annotate(r"$a=30$ : jamais atteint",(0.3,30),xytext=(0.3,31.2),color=ORANGE,fontsize=12)
ax.axhline(16,color=GRAY,ls=":",lw=1.2)
for xv in (2,8): ax.plot([xv,xv],[0,16],color=GRAY,ls=":",lw=1.2); ax.plot(xv,16,"o",color="black",ms=6,zorder=5)
ax.annotate(r"$x=2$ ou $x=8$ : $a=16$",(5,16),xytext=(5.3,10),fontsize=12,ha="left")
ax.plot(5,25,"o",color=ORANGE,ms=8,zorder=5); ax.annotate(r"maximum : $a(5)=25$",(5,25),xytext=(5.6,26.4),fontsize=12,arrowprops=dict(arrowstyle="->",color=GRAY))
ax.set_xlim(0,10); ax.set_ylim(0,34); ax.set_xticks(range(0,11)); ax.grid(alpha=0.2)
ax.set_xlabel(r"$x$ (cm), un côté du rectangle de périmètre $20$ cm"); ax.set_ylabel(r"aire $a(x)=x(10-x)$ (cm$^2$)")
fig.tight_layout(); fig.savefig(OUT+"second-degre-aire.svg"); plt.close(fig)

# 8. homothéties de centre O : rapports 2 et -1/2
A=np.array([1.5,0.5]); B=np.array([2.5,0.5]); C=np.array([2,1.5])
fig,ax=plt.subplots(figsize=(7.2,4.4))
def tri(P,col,lab):
    Q=np.vstack([P,P[0]]); ax.plot(Q[:,0],Q[:,1],color=col,lw=2); ax.fill(P[:,0],P[:,1],color=col,alpha=0.12)
    g=P.mean(axis=0)
    for pt,nm in zip(P,lab):
        d=(pt-g)/np.linalg.norm(pt-g); ax.annotate(nm,pt,xytext=tuple(d*15),textcoords="offset points",color=col,fontsize=13,ha="center",va="center")
T0=np.array([A,B,C]); T1=2*T0; T2=-0.5*T0
for P in T0: ax.plot([-0.5*P[0],2*P[0]],[-0.5*P[1],2*P[1]],color=GRAY,lw=0.8,ls="--")
tri(T0,"black",["$A$","$B$","$C$"]); tri(T1,TEAL,["$A'$","$B'$","$C'$"]); tri(T2,ORANGE,["$A''$","$B''$","$C''$"])
ax.plot(0,0,"o",color="black",ms=7,zorder=6); ax.annotate("$I$",(0,0),xytext=(5,9),textcoords="offset points",fontsize=14)
ax.text(3.3,0.1,r"rapport $2$",color=TEAL,fontsize=13); ax.text(-0.4,-1.3,r"rapport $-\frac{1}{2}$",color=ORANGE,fontsize=13)
ax.set_aspect("equal"); ax.set_xlim(-2.2,5.6); ax.set_ylim(-1.6,3.6); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT+"homothetie-triangle.svg"); plt.close(fig)

# 9. demi-cercle trigonométrique
al=np.deg2rad(55); M=np.array([np.cos(al),np.sin(al)]); Tp=np.array([1,np.tan(al)])
fig,ax=plt.subplots(figsize=(6.4,5.4))
th=np.linspace(0,np.pi,300); ax.plot(np.cos(th),np.sin(th),color="black",lw=2)
ax.plot([-1.25,1.45],[0,0],color="black",lw=0.9); ax.plot([0,0],[0,1.25],color="black",lw=0.9)
ax.plot([1,1],[0,1.55],color=GRAY,lw=1.0,ls="--")
ax.plot([0,Tp[0]],[0,Tp[1]],color=GRAY,lw=1.2)
ax.plot([M[0],M[0]],[0,M[1]],color=ORANGE,lw=2.4); ax.plot([0,M[0]],[0,0],color=TEAL,lw=2.4)
ax.plot([1,1],[0,Tp[1]],color=BLUE,lw=2.4)
ax.add_patch(matplotlib.patches.Arc((0,0),0.45,0.45,theta1=0,theta2=55,color="black",lw=1.2))
ax.text(0.30,0.09,r"$\alpha$",fontsize=14)
for P,nm,off in [((1,0),"$A$",(6,-16)),((-1,0),"$A'$",(-8,-18)),((0,1),"$B$",(6,4)),((0,0),"$O$",(-14,-16)),((M[0],0),"$P$",(-4,-18))]:
    ax.plot(*P,"o",color="black",ms=5,zorder=5); ax.annotate(nm,P,xytext=off,textcoords="offset points",fontsize=13)
ax.plot(*M,"o",color="black",ms=6,zorder=6); ax.annotate("$M$",M,xytext=(-18,6),textcoords="offset points",fontsize=14)
ax.plot(*Tp,"o",color=BLUE,ms=6,zorder=6); ax.annotate("$T$",Tp,xytext=(7,2),textcoords="offset points",fontsize=14,color=BLUE)
ax.annotate(r"$\cos\alpha$",(M[0]/2,0),xytext=(-12,-34),textcoords="offset points",color=TEAL,fontsize=13)
ax.annotate(r"$\sin\alpha$",(M[0],M[1]/2),xytext=(-52,-4),textcoords="offset points",color=ORANGE,fontsize=13)
ax.annotate(r"$\tan\alpha=AT$",(1,Tp[1]/2),xytext=(8,0),textcoords="offset points",color=BLUE,fontsize=13)
ax.set_aspect("equal"); ax.set_xlim(-1.35,1.95); ax.set_ylim(-0.3,1.65); ax.axis("off")
fig.tight_layout(); fig.savefig(OUT+"trigo-demi-cercle.svg"); plt.close(fig)

# 10. fonctions de référence : parabole et hyperbole translatées
fig,(a1,a2)=plt.subplots(1,2,figsize=(10.5,4.2))
xb=np.linspace(-2.4,2.4,300); xt=np.linspace(-0.4,4.4,300)
a1.plot(xb,xb**2,color="black",lw=2); a1.plot(xt,(xt-2)**2+1,color=TEAL,lw=2)
a1.annotate("",xy=(2,1),xytext=(0,0),arrowprops=dict(arrowstyle="->",color=ORANGE,lw=2))
a1.text(0.25,-0.95,r"$\vec{u}\,(2\,;1)$",color=ORANGE,fontsize=13)
a1.plot(0,0,"o",color="black",ms=6); a1.plot(2,1,"o",color=TEAL,ms=6)
a1.annotate(r"$y=x^2$",(-2.7,6.3),color="black",fontsize=13); a1.annotate(r"$y=(x-2)^2+1$",(3.7,7.5),color=TEAL,fontsize=13,ha="center")
a1.text(-1.7,-0.95,"$S=O$",fontsize=12); a1.text(2.12,0.2,r"$S'(2\,;1)$",fontsize=12,color=TEAL)
a1.axhline(0,color="black",lw=0.7); a1.axvline(0,color="black",lw=0.7)
a1.axvline(2,color=TEAL,lw=0.8,ls="--"); a1.set_xlim(-2.8,5.0); a1.set_ylim(-1.5,8.3); a1.set_aspect("equal"); a1.axis("off")
a1.set_title("parabole : sommet et axe se déplacent",fontsize=12)
xp=np.linspace(0.12,6,300); xn=np.linspace(-3,-0.12,300)
for xs in (xp,xn): a2.plot(xs,1/xs,color="black",lw=2)
xp2=np.linspace(2.13,6,300); xn2=np.linspace(-1,1.87,300)
for xs in (xp2,xn2): a2.plot(xs,1/(xs-2)+1,color=TEAL,lw=2)
a2.axhline(0,color="black",lw=0.7); a2.axvline(0,color="black",lw=0.7)
a2.axvline(2,color=TEAL,lw=0.9,ls="--"); a2.axhline(1,color=TEAL,lw=0.9,ls="--")
a2.annotate("",xy=(2,1),xytext=(0,0),arrowprops=dict(arrowstyle="->",color=ORANGE,lw=2))
a2.plot(0,0,"o",color="black",ms=6); a2.plot(2,1,"o",color=TEAL,ms=6)
a2.text(-0.55,-0.55,"$O$",fontsize=12); a2.text(2.1,1.15,r"$I(2\,;1)$",fontsize=12,color=TEAL)
a2.text(4.2,-0.6,r"$y=\frac{1}{x}$",fontsize=13); a2.text(3.6,2.1,r"$y=\frac{1}{x-2}+1$",fontsize=13,color=TEAL)
a2.text(2.1,-1.5,r"$x=2$",fontsize=11,color=TEAL); a2.text(-2.9,1.1,r"$y=1$",fontsize=11,color=TEAL)
a2.set_xlim(-3,6); a2.set_ylim(-2.2,4.2); a2.set_aspect("equal"); a2.axis("off")
a2.set_title("hyperbole : centre et asymptotes se déplacent",fontsize=12)
fig.tight_layout(); fig.savefig(OUT+"fonctions-parabole-hyperbole.svg"); plt.close(fig)

# 11. suites : arithmétique (alignés) et géométrique (exponentielle)
n=np.arange(0,9)
fig,(a1,a2)=plt.subplots(1,2,figsize=(10.5,4.2))
u=1+2*n
a1.plot([0,8],[1,17],color=GRAY,lw=1,ls="--"); a1.plot(n,u,"o",color=TEAL,ms=8,zorder=3)
for k,off,ha in ((0,(8,-16),"left"),(4,(8,-16),"left"),(8,(-10,8),"right")):
    a1.annotate(rf"$U_{k}={u[k]}$",(n[k],u[k]),xytext=off,textcoords="offset points",fontsize=12,ha=ha)
a1.set_title(r"arithmétique : $U_{n+1}=U_n+2$",fontsize=12); a1.set_xlabel("$n$"); a1.set_ylabel("$U_n$"); a1.grid(alpha=0.2); a1.set_xticks(n); a1.set_ylim(-1.5,19)
v=1.5**n
xx=np.linspace(0,8,200); a2.plot(xx,1.5**xx,color=GRAY,lw=1,ls="--"); a2.plot(n,v,"o",color=TEAL,ms=8,zorder=3)
for k,off,ha in ((0,(8,-16),"left"),(4,(-10,10),"right"),(8,(-10,-4),"right")):
    a2.annotate(rf"$V_{k}={v[k]:.2f}$".replace(".00","").replace(".",r"{,}"),(n[k],v[k]),xytext=off,textcoords="offset points",fontsize=12,ha=ha)
a2.set_title(r"géométrique : $V_{n+1}=1{,}5\,V_n$",fontsize=12); a2.set_xlabel("$n$"); a2.set_ylabel("$V_n$"); a2.grid(alpha=0.2); a2.set_xticks(n); a2.set_ylim(-2,29)
fig.tight_layout(); fig.savefig(OUT+"suites-croissance.svg"); plt.close(fig)
print("done")
