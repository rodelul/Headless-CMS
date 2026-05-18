export default function ContactSidebar() {
  return (
    <div className="lg:col-span-2 space-y-5">
      <div className="card p-7">
        <h3 className="font-heading text-lg font-semibold tracking-tight mb-5">Informații de contact</h3>
        <div className="space-y-4">
          {[
            { label: "Email", value: "contact@nexus.dev", icon: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.093L2.25 6.75" },
            { label: "Telefon", value: "+40 700 000 000", icon: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" },
            { label: "Locație", value: "Timișoara, România", icon: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" },
          ].map((item) => (
            <div key={item.label} className="flex items-start gap-3">
              <div className="w-9 h-9 bg-accent-dim rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path d={item.icon}/>
                </svg>
              </div>
              <div>
                <p className="text-xs text-muted">{item.label}</p>
                <p className="text-sm font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card p-7">
        <h3 className="font-heading text-lg font-semibold tracking-tight mb-3">Program</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted">Luni - Vineri</span>
            <span>09:00 - 18:00</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted">Weekend</span>
            <span className="text-dark-600">Închis</span>
          </div>
        </div>
      </div>

      <div className="card p-7 border-accent/20 bg-accent/[0.03]">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"/></svg>
          <h3 className="font-heading text-sm font-semibold text-accent">Răspuns rapid</h3>
        </div>
        <p className="text-sm text-muted leading-relaxed">
          Răspundem în maxim 24 de ore. Pentru urgențe, sună-ne direct.
        </p>
      </div>
    </div>
  );
}
