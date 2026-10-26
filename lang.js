// German texts. The English texts live directly in index.html (data-i18n="key").
const DE = {
  tagline: "// IT-Spezialist · Systemintegration · Windows & Linux",
  nav_about: "Über mich",
  nav_edu: "Ausbildung",
  nav_articles: "Artikel",
  nav_news: "Neuigkeiten",
  about_h: "Über mich",
  about_p1: "Ich bin IT-Spezialist mit Schwerpunkt Systemintegration und Infrastrukturmanagement. Ich verbinde Betriebssystemverwaltung, Netzwerkadministration und moderne Software-Tools.",
  about_p2: "Getrieben von der Leidenschaft für praxisnahe technische Problemlösung konfiguriere ich Unternehmensumgebungen, schreibe Automatisierungsskripte für Windows und Linux und beschäftige mich mit Cybersicherheit. Wenn ich nicht gerade Systeme optimiere oder an lokalen Labs arbeite, teile ich technische Skripte, baue Utility-Apps und schreibe über Open-Source-Technologie.",
  focus_h: "Schwerpunkte",
  c_si: "Systemintegration",
  c_infra: "Infrastruktur",
  c_net: "Netzwerkadministration",
  c_auto: "Automatisierung & Skripting",
  c_sec: "Cybersicherheit",
  edu_h: "Ausbildung",
  edu_p1: "Seit Januar 2026 mache ich in Leipzig eine Umschulung im Bereich IT-Systemintegration. Ich bin 28 und bringe mein großes praktisches Interesse an Systemen und Netzwerken in eine strukturierte Ausbildung ein.",
  edu_p2: "Perspektivisch interessiere ich mich für eine Spezialisierung in Cybersicherheit durch eine Weiterbildung. Unten stehen die Themenbereiche, die in der Schule bereits behandelt wurden oder noch folgen.",
  edu_topics: "Themenbereiche",
  articles_h: "Artikel",
  art_card: "Open-Source-Zero-Knowledge-Sicherheit in Unternehmens- und Home-Lab-Umgebungen umsetzen.",
  art_back: "← Alle Artikel",
  date_oct: "Oktober 2026",
  news_h3: "Portfolio ist online",
  news_p: "Die erste Version meiner Seite ist online. Weitere Updates folgen.",
  apps_note: "Utility-Apps und Skripte, die ich empfehle, direkt von meinem GitHub.",
  apps_soon: "Demnächst",
  apps_soon_p: "Meine GitHub-Projekte erscheinen hier.",
  win_p: "Administration, PowerShell-Automatisierung und Unternehmensumgebungen.",
  lin_p: "Bash-Skripte, Server und Home-Lab-Setups."
};

// Subject areas: [English, German] pairs. img = optional photo for the card.
const STUDY = [
  { h: ["Network Engineering & Protocols", "Netzwerktechnik & Protokolle"], items: [
    ["IP Addressing & Subnetting (IPv4 and IPv6)", "IP-Adressierung & Subnetting (IPv4 und IPv6)"],
    ["OSI Model & TCP/IP stack layers", "OSI-Modell & TCP/IP-Schichten"],
    ["Switching & Routing configuration", "Switching- & Routing-Konfiguration"],
    ["Network Services (DNS, DHCP, NAT, VPN)", "Netzwerkdienste (DNS, DHCP, NAT, VPN)"],
    ["Wireless Networks (WLAN setups & security)", "Drahtlosnetzwerke (WLAN-Aufbau & Sicherheit)"] ] },
  { img: "images/servers.jpg", h: ["Server Administration & Operating Systems", "Serveradministration & Betriebssysteme"], items: [
    ["Windows Server setup & Active Directory administration", "Windows-Server-Einrichtung & Active-Directory-Verwaltung"],
    ["Linux system administration (Bash scripting, permission models, services)", "Linux-Systemadministration (Bash-Skripte, Rechtemodelle, Dienste)"],
    ["Virtualization technologies (Hyper-V, VMware, Proxmox)", "Virtualisierungstechnologien (Hyper-V, VMware, Proxmox)"],
    ["Cloud Infrastructure (AWS, Azure, or hybrid setups)", "Cloud-Infrastruktur (AWS, Azure oder Hybrid-Szenarien)"],
    ["Server services (Web servers, Database servers, File/Print servers)", "Serverdienste (Webserver, Datenbankserver, Datei-/Druckserver)"] ] },
  { h: ["IT Security & Data Protection", "IT-Sicherheit & Datenschutz"], items: [
    ["Firewall configuration & Intrusion Detection/Prevention Systems (IDS/IPS)", "Firewall-Konfiguration & Intrusion Detection/Prevention (IDS/IPS)"],
    ["Backup strategies and Disaster Recovery plans", "Backup-Strategien & Disaster-Recovery-Pläne"],
    ["Cybersecurity fundamentals & Threat Analysis", "Grundlagen der Cybersicherheit & Bedrohungsanalyse"],
    ["Data protection laws (GDPR / DSGVO) & IT-Grundschutz (BSI)", "Datenschutzrecht (DSGVO) & IT-Grundschutz (BSI)"] ] },
  { img: "images/cables.jpg", h: ["Hardware & System Integration", "Hardware & Systemintegration"], items: [
    ["PC Hardware architecture & troubleshooting", "PC-Hardware-Architektur & Fehlersuche"],
    ["Storage Systems (RAID, NAS, SAN)", "Speichersysteme (RAID, NAS, SAN)"],
    ["Workplace provisioning & client deployment", "Arbeitsplatzbereitstellung & Client-Rollout"],
    ["Power & Infrastructure considerations (UPS, cabling, server racks)", "Strom & Infrastruktur (USV, Verkabelung, Serverschränke)"] ] },
  { img: "images/coding.jpg", h: ["Software Development & Automation", "Softwareentwicklung & Automatisierung"], items: [
    ["Scripting for automation (PowerShell, Python, Bash)", "Skripte zur Automatisierung (PowerShell, Python, Bash)"],
    ["Basic programming principles & Object-Oriented concepts", "Programmiergrundlagen & objektorientierte Konzepte"],
    ["Database Management Systems & SQL fundamentals", "Datenbanksysteme & SQL-Grundlagen"],
    ["System modeling (UML diagrams & flowcharts)", "Systemmodellierung (UML-Diagramme & Flussdiagramme)"] ] },
  { h: ["Business, Project & Service Management", "Wirtschaft, Projekt- & Servicemanagement"], items: [
    ["IT Service Management (ITIL principles, ticketing systems, SLA handling)", "IT-Service-Management (ITIL, Ticketsysteme, SLA-Handling)"],
    ["Agile & Traditional Project Management (Scrum, Kanban, Waterfall)", "Agiles & klassisches Projektmanagement (Scrum, Kanban, Wasserfall)"],
    ["Procurement, cost calculation & offer comparison", "Beschaffung, Kostenkalkulation & Angebotsvergleich"],
    ["Quality Assurance & Technical Documentation", "Qualitätssicherung & technische Dokumentation"],
    ["Business processes, labor law & occupational safety", "Geschäftsprozesse, Arbeitsrecht & Arbeitsschutz"] ] }
];
