import { company } from '../../data/company'
import PageHeader from '../../components/common/PageHeader'
import { ArrowUpRight } from '../../components/common/Icons'
import './BookPage.css'

// Microsoft Bookings, embedded (Task 16A). Microsoft's own code uses
// height="100%", which collapses unless the parent has a fixed height, so the
// iframe sits in a container with a set height. The calendar keeps a white
// background in dark mode: Microsoft's page has its own light styling.
export default function BookPage() {
  return (
    <>
      <PageHeader
        crumbs={[{ label: 'Book a consultation' }]}
        title="Book a free IT consultation"
        lead="Choose a time that suits you for a free 30-minute conversation about your IT, cloud, security or network needs. You’ll receive a calendar invitation and confirmation by email."
      />

      <section className="section section--tight" aria-label="Booking calendar">
        <div className="container book">
          <div className="booking-embed">
            <iframe
              src={company.booking.embedUrl}
              title="Book a free IT consultation with exQ Services"
              width="100%"
              height="100%"
              scrolling="yes"
              loading="lazy"
            />
          </div>

          <div className="book__after">
            <p>
              Prefer email? Write to <a href={company.email.href}>{company.email.display}</a> and we’ll reply within one
              business day.
            </p>
            <p className="book__fallback">
              Having trouble with the calendar?{' '}
              <a href={company.booking.url} target="_blank" rel="noopener">
                Open the booking page in a new tab
                <ArrowUpRight width={16} height={16} />
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
