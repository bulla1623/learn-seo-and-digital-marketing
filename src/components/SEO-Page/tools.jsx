import "./tools.css"; 

export default function Tools() {
  const tools = [
    "ahrefs.png", "moz.png", "ads.png", "google-analytics.png",
    "Google-Data-Studio.png", "Google-Search-Console.png", "Screming-frog.png",
    "thehoth.png", "neilpatel.png", "gpt.png", "Canva.png", "Seo-Site-Checkup.png",
    "Google-AdWords.png", "google-pagespeed-insights.png", "AnswerThePublic.png",
    "Gemini.png", "Bing.png", "Gramarly.png", "KWFinder.png", "GTmetrix.png",
    "Keyword-Tool.png", "semrush.png", "Small-SEO-Tools.png", "SEObility.png",
    "SEOptimer.png", "RankMath.png", "Surfer.png", "Wordtracker.png", "Yoast.png"
  ];

  return (
    <div className="tools-container">
      <h2 className="title"><span className="highlight">Tools You'll Learn</span></h2>

      <div className="grid-container">
        {tools.map((tool, index) => (
          <div key={index} className="card">
            <img src={`/Images/tools-logo/${tool}`} alt={tool.replace(".png", "")} className="logo" />
          </div>
        ))}
      </div>
    </div>
  );
}
