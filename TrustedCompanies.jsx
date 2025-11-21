
export default function TrustedCompanies() {
  const logos = [
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/3E0eIh3tWHNWADiHNBmW4j/3444d1a4d029f283aa7d10ccf982421e/volkswagen_logo.svg", alt: "Volkswagen" },
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/2pNyDO0KV1eHXk51HtaAAz/090fac96127d62e784df31e93735f76a/samsung_logo.svg", alt: "Samsung" },
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/3YzfvEjCAUi3bKHLW2h1h8/ec478fa1ed75f6090a7ecc9a083d80af/cisco_logo.svg", alt: "Cisco" },
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/23XnhdqwGCYUhfgIJzj3PM/77259d1ac2a7d771c4444e032ee40d9e/vimeo_logo_resized-2.svg", alt: "Vimeo" },
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/1UUVZtTGuvw23MwEnDPUr3/2683579ac045486a0aff67ce8a5eb240/procter_gamble_logo.svg", alt: "Procter & Gamble" },
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/1GoAicYDYxxRPGnCpg93gi/a8b6190cc1a24e21d6226200ca488eb8/hewlett_packard_enterprise_logo.svg", alt: "Hewlett Packard Enterprise" },
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/2tQm6aYrWQzlKBQ95W00G/c7aaf002814c2cde71d411926eceaefa/citi_logo.svg", alt: "Citi" },
    { src: "https://cms-images.udemycdn.com/96883mtakkm8/7guDRVYa2DZD0wD1SyxREP/b704dfe6b0ffb3b26253ec36b4aab505/ericsson_logo.svg", alt: "Ericsson" }
  ];

  return (
    <section className="trusted-companies">
      <h2>Trusted by over 17,000 companies and millions of learners around the world</h2>
      <div className="company-logos">
        {logos.map((logo) => (
          <img key={logo.alt} src={logo.src} alt={logo.alt} />
        ))}
      </div>
    </section>
  );
}
