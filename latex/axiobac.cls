% axiobac.cls : sujets du bac AxioMath.
% Un sujet = public/bac/<id>/sujet.tex écrit avec cette classe. Le site lit le même fichier :
% les métadonnées (\annee, \session, …) et la structure (exercice, probleme, \partie,
% \chapitres, \banque, \horsprogramme) servent à générer la page web, la fiche du sujet
% et les liens vers les chapitres. Compiler : copier axiobac.cls à côté du .tex, puis pdflatex.
\NeedsTeXFormat{LaTeX2e}
\ProvidesClass{axiobac}[2026/11/11 Sujets du baccalaureat AxioMath]
\LoadClass[12pt, a4paper]{article}

\RequirePackage[utf8]{inputenc}
\RequirePackage[T1]{fontenc}
\RequirePackage[french]{babel}
\RequirePackage{amsmath, amssymb, mathrsfs}
\RequirePackage[bitstream-charter]{mathdesign}
\RequirePackage{geometry}
\RequirePackage{enumitem}
\RequirePackage{fancyhdr}
\geometry{top=3cm, bottom=2cm, left=2cm, right=2cm}

% ---------- métadonnées (une commande par information, dans le préambule) ----------
\def\@annee{}\def\@mois{Juin}\def\@session{principale}\def\@epreuve{Mathématiques}
\def\@sectionbac{}\def\@duree{}\def\@coefficient{}\def\@ministere{Ministère de l'Éducation}
\newcommand{\annee}[1]{\def\@annee{#1}}          % 1984
\newcommand{\mois}[1]{\def\@mois{#1}}            % Juin
\newcommand{\session}[1]{\def\@session{#1}}      % principale | contrôle
\newcommand{\epreuve}[1]{\def\@epreuve{#1}}      % Mathématiques
\newcommand{\sectionbac}[1]{\def\@sectionbac{#1}} % intitulé d'époque
\newcommand{\sections}[1]{}                      % pour le site : mathematiques, sciences-techniques, …
\newcommand{\duree}[1]{\def\@duree{#1}}          % 4 heures
\newcommand{\coefficient}[1]{\def\@coefficient{#1}}
\newcommand{\ministere}[1]{\def\@ministere{#1}} % intitulé d'époque du ministère

% ---------- en-tête de page ----------
\pagestyle{fancy}
\fancyhf{}
\lhead{\textbf{RÉPUBLIQUE TUNISIENNE}\\\MakeUppercase{\@ministere}}
\rhead{\textbf{EXAMEN DU BACCALAURÉAT}\\\MakeUppercase{\@mois}\ \@annee\ -- SESSION \MakeUppercase{\@session}}
\renewcommand{\headrulewidth}{0pt}
\cfoot{\thepage}

% ---------- bloc titre ----------
\newcommand{\entete}{%
  \begin{center}
    \vspace*{0.5cm}
    {\Large \textbf{ÉPREUVE : \MakeUppercase{\@epreuve}}}\\[0.2cm]
    \rule{0.8\textwidth}{0.5pt}
  \end{center}
  \begin{center}
    \fbox{\parbox{0.9\textwidth}{\centering
      \textbf{SECTION :} \MakeUppercase{\@sectionbac}\\
      \textbf{DURÉE :} \@duree \quad | \quad \textbf{COEFFICIENT :} \@coefficient}}
  \end{center}
  \vspace{0.5cm}}

% ---------- structure ----------
\newcounter{axioexo}
% \begin{exercice}{4} … \end{exercice}
\newenvironment{exercice}[1]{%
  \stepcounter{axioexo}%
  \section*{\ifnum\value{axioexo}=1 1\textsuperscript{er}\else\arabic{axioexo}\textsuperscript{ème}\fi\ Exercice (#1 points)}}%
  {\par\vspace{0.5cm}\hrule\vspace{0.5cm}}
% \begin{probleme}{12} … \end{probleme}
\newenvironment{probleme}[1]{\section*{Problème (#1 points)}}{}
% \partie{I}
\newcommand{\partie}[1]{\subsection*{Partie #1}}

% ---------- informations pour le site (n'impriment rien) ----------
\newcommand{\chapitres}[1]{}    % \chapitres{Similitudes, Nombres complexes} : chapitres du programme actuel
\newcommand{\banque}[1]{}       % \banque{0000001} : uid de l'exercice dans la banque AxioMath
\newcommand{\horsprogramme}{}   % la partie n'est plus au programme actuel
\newcommand{\titre}[1]{}        % \titre{Similitude complexe} : titre court pour le site
