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
print("done")
