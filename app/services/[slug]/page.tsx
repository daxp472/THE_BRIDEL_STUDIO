import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { servicesList, getServiceBySlug } from "@/lib/services-data";
import { businessConfig } from "@/lib/business";
import { SchemaOrg } from "@/components/ui/SchemaOrg";
import { BookingCTA } from "@/components/ui/BookingCTA";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesList.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.nameEn} in Unjha`,
    description: `${service.nameEn} at The Bridel Studio, Shilp Complex, Visnagar Chokdi, Unjha. ${service.shortDescEn}`,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    openGraph: {
      title: `${service.nameEn} in Unjha | The Bridel Studio`,
      description: service.shortDescEn,
      images: [service.imagePath],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.nameEn, url: `/services/${service.slug}` },
  ];

  const faqsForSchema = service.faqs.map((f) => ({
    question: f.questionEn,
    answer: f.answerEn,
  }));

  return (
    <>
      <SchemaOrg
        breadcrumbs={breadcrumbs}
        service={{
          name: service.nameEn,
          description: service.shortDescEn,
          url: `/services/${service.slug}`,
          providerName: businessConfig.name,
        }}
        faqs={faqsForSchema}
      />

      <article className="bg-studio-ivory py-12 sm:py-20 border-b border-studio-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs text-studio-stone mb-8"
          >
            <Link href="/" className="hover:text-studio-maroon">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-studio-maroon">
              Services
            </Link>
            <span>/</span>
            <span className="text-studio-charcoal font-medium">
              {service.nameEn}
            </span>
          </nav>

          {/* Heading Header */}
          <header className="space-y-4 mb-10 pb-8 border-b border-studio-border">
            <div className="inline-flex items-center space-x-2 text-xs font-semibold uppercase tracking-widest text-studio-maroon">
              <span className="w-5 h-px bg-studio-brass" />
              <span>The Bridel Studio • Unjha</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl text-studio-charcoal font-normal">
              {service.nameEn}
            </h1>

            <p className="text-sm font-gujarati text-studio-stone">
              {service.nameGu}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-studio-stone">
              <div>
                <span className="text-[10px] uppercase tracking-wider block text-studio-stone/80">
                  Approx. Duration
                </span>
                <span className="font-medium text-studio-charcoal text-sm">
                  {service.duration}
                </span>
              </div>
              <div className="h-6 w-px bg-studio-border" />
              <div>
                <span className="text-[10px] uppercase tracking-wider block text-studio-stone/80">
                  Investment
                </span>
                <span className="font-medium text-studio-maroon text-sm">
                  {service.startingPrice}
                </span>
              </div>
              <div className="h-6 w-px bg-studio-border" />
              <div>
                <span className="text-[10px] uppercase tracking-wider block text-studio-stone/80">
                  Location
                </span>
                <span className="font-medium text-studio-charcoal text-sm">
                  Shilp Complex, Unjha
                </span>
              </div>
            </div>
          </header>

          {/* Main Grid: Photo & Editorial Narrative */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
            <div className="lg:col-span-5">
              <div className="relative aspect-4/5 w-full bg-studio-parchment border border-studio-border overflow-hidden">
                <Image
                  src={service.imagePath}
                  alt={service.imageAlt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
              <p className="text-[11px] text-studio-stone text-right mt-2 italic">
                Styling reference at The Bridel Studio
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-serif text-2xl text-studio-charcoal">
                About the Experience
              </h2>

              {service.fullDescEn.map((para, i) => (
                <p
                  key={i}
                  className="text-sm sm:text-base text-studio-stone leading-relaxed"
                >
                  {para}
                </p>
              ))}

              {/* Inclusions Card */}
              <div className="border border-studio-border bg-studio-parchment/60 p-6 space-y-3 mt-6">
                <h3 className="font-serif text-lg text-studio-charcoal">
                  What is Included
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-studio-charcoal">
                  {service.includesEn.map((inc) => (
                    <li key={inc} className="flex items-center space-x-2.5">
                      <svg
                        className="w-4 h-4 text-studio-brass shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Booking CTA Trigger */}
              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <BookingCTA
                  serviceName={service.nameEn}
                  label="Reserve Slot via WhatsApp"
                  className="py-4 px-6 text-xs uppercase"
                />
                <Link
                  href="/contact"
                  className="text-xs uppercase font-semibold tracking-wider text-studio-charcoal hover:text-studio-maroon py-4 px-6 border border-studio-border bg-studio-ivory text-center"
                >
                  Contact Studio
                </Link>
              </div>
            </div>
          </div>

          {/* Genuine FAQs for Schema & Bride Guidance */}
          {service.faqs.length > 0 && (
            <section className="pt-12 border-t border-studio-border">
              <h2 className="font-serif text-2xl sm:text-3xl text-studio-charcoal mb-8">
                Frequently Asked Questions
              </h2>
              <div className="space-y-6">
                {service.faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border-b border-studio-border pb-6 space-y-2"
                  >
                    <h3 className="text-base font-semibold text-studio-charcoal">
                      {faq.questionEn}
                    </h3>
                    <p className="text-xs font-gujarati text-studio-stone">
                      {faq.questionGu}
                    </p>
                    <p className="text-sm text-studio-stone leading-relaxed pt-1">
                      {faq.answerEn}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </article>
    </>
  );
}
