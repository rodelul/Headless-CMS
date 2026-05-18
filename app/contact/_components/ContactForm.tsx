export default function ContactForm() {
  return (
    <form action="/api/contact" method="POST" className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-muted mb-2">
            Nume complet *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 bg-dark-800 border border-white/[0.06] rounded-xl text-white placeholder-dark-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            placeholder="Ion Popescu"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-muted mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-dark-800 border border-white/[0.06] rounded-xl text-white placeholder-dark-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
            placeholder="ion@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-muted mb-2">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-3 bg-dark-800 border border-white/[0.06] rounded-xl text-white placeholder-dark-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
          placeholder="+40 700 000 000"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-muted mb-2">
          Tip proiect *
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 bg-dark-800 border border-white/[0.06] rounded-xl text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
        >
          <option value="">Selectează</option>
          <option value="web">Web Application</option>
          <option value="mobile">Mobile App</option>
          <option value="consulting">Consulting & Audit</option>
          <option value="devops">Cloud & DevOps</option>
          <option value="other">Altceva</option>
        </select>
      </div>

      <div>
        <label htmlFor="budget" className="block text-sm font-medium text-muted mb-2">
          Buget estimativ
        </label>
        <select
          id="budget"
          name="budget"
          className="w-full px-4 py-3 bg-dark-800 border border-white/[0.06] rounded-xl text-white focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all"
        >
          <option value="">Selectează</option>
          <option value="small">Sub 5.000 EUR</option>
          <option value="medium">5.000 - 15.000 EUR</option>
          <option value="large">15.000 - 50.000 EUR</option>
          <option value="enterprise">50.000+ EUR</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-muted mb-2">
          Descriere proiect *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-dark-800 border border-white/[0.06] rounded-xl text-white placeholder-dark-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all resize-none"
          placeholder="Descrie pe scurt ce ai nevoie — funcționalități, termen, detalii tehnice..."
        />
      </div>

      <button type="submit" className="btn-primary w-full sm:w-auto">
        Trimite mesajul
        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"/></svg>
      </button>
    </form>
  );
}
