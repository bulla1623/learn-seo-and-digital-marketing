import React, { useState } from "react";
import "./Course.css"; // Add necessary styling

const seoModules = [
  { id: "content1", title: "Introduction To SEO", details: ["What is Search Engine Optimization", "Basics Of SEO", "How SEO Works", "Scope Of SEO",  "Future of SEO",  "Growth of SEO",  "History of Google",  "SEO Techniques (On-Page and Off-Page)",  "Difference between White Hat, Grey Hat, and Black Hat SEO",  "Need Of SEO",  "Things to Keep In Mind Before Getting Started With SEO of Website",  "What is Ranking",  "What is SERP",  "How does Google rank a Website?",  "Paid vs. Organic Result",  "Understanding Google Updates/ Penalties"], image: "/Images/SEO-Course/1.jpg" },
  { id: "content2", title: "Website Planning And Creation", details: ["Domain Selection", "Domain Name Registration", "Hosting And Its Types",  "How to Connect Domain to Hosting",  "Decide on a Content Management System (CMS)",  "Plan Website Structure and Navigation",  "WordPress Installation",  "WordPress Overview",  "Important Plugins Overview",  "Website Designing Using Elementor, Divi, WPBakery etc.",  "Content Creation and Optimization",  "Integrate Social Media and Sharing Options",  "Security and Backup Measures",  "Test and Debug",  "Launch and Promotion", "Monitor and Improve"], image: "/Images/SEO-Course/2.jpg" },
  { id: "content3", title: "Keyword Research", details: ["Introduction To Keyword Researchs", "Types of keywords", "Long-Tail vs. Short-Tail Keywords",  "Why and How to choose the right keywords?",  "Tools for keyword research – Free and Paid",  "Keyword Organization and Mapping",  "Analyzing and Monitoring Keyword Performance",  "Understanding Keyword Properties",  "How to Find Competition?",  "How to Add Keywords in Content?", "Implementing Keywords into Content and SEO"], image: "/Images/SEO-Course/3.jpg" },
  { id: "content4", title: "Content Writing", details: ["Define the Content Goals", "Understand the Target Audience", "Conduct Keyword Research",  "Craft an Attention-Grabbing Headline",  "Develop a Clear Structure",  "Write Engaging Introductions",  "Provide Valuable and Relevant Information", "Use Visuals to Enhance Content", "Maintain a Consistent Tone and Voice", "Use Call-to-Action (CTA)", "Edit and Proofread", "Optimize for SEO", "Review and Analyze", "Update and Refresh"], image: "/Images/SEO-Course/4.jpg" },
  { id: "content5", title: "Local SEO", details: ["What is Local SEO", "Setup Google My Business Account", "Understanding Google Business Profile Policy",  "Local SEO Ranking Factors",  "Local Citations and Directory Listings",  "Customer Reviews and Reputation Management",  "Google Business Profile Dashboard Overview", "Make a Free Google Business Profile Website", "How to Optimize Local SEO to Rank on the Top"], image: "/Images/SEO-Course/5.jpg" },
  { id: "content6", title: "On-Page SEO", details: ["What is On-Page SEO", "Site Audit", "Site Recommendation",  "On-Page SEO Ranking Factors",  "Content Analysis",  "Competitor Analysis",  "SEO Analysis and Recommendations", "SEO Title", "Heading and Sub Headings", "Meta Tags creation and optimization", "ALT Tag", "Heading Tags (H1, H2, H3, etc.)", "Favicon", "Internal Links", "External Links", "URL Structure", "Length of Article", "How to publish your article in WordPress?", "How to improve On-Page SEO score", "On-Page SEO Plugins List"], image: "/Images/SEO-Course/6.jpg" },
  { id: "content7", title: "Off-Page SEO", details: ["Do follow and No follow links", "What are Domain Authority and Page Authority?", "Business Citations",  "Web 2.0",  "Guest Posting",  "Blog Commenting",  "Quora Answer", "Competitor Backlinks", "Podcast", "Microblogging", "Geotagging", "PR (Press Release)", "Article Submission", "Article Promotion", "Blog Submission", "Blog Promotion", "Profile Creation", "Social Bookmarking", "Classified Ads", "Image Sharing", "SMO Promotion", "Pinterest Sharing", "Ping Submission", "Search Engine Submission", "Web 2.0 Promotion", "Directory Submission", "GMB Promotion", "Banner Creation", "Banner Promotion", "PPT Submission", "PPT Promotion", "PDF Submission", "PDF Promotion", "Video Submission", "Video Promotion", "Infographic Submission", "Infographic Promotion"], image: "/Images/SEO-Course/7.jpg" },
  { id: "content8", title: "Technical SEO", details: ["What is Technical SEO?", "Google Search Console and its Setup", "Google Search Console and its Setup",  "Google Analytics",  "Bing Webmaster",  "How to create a Schema Markup?",  "How to create a Sitemap?", "txt File", "Page Speed Optimization", "Google Disavow Tool", "HTTPS (SSL) Certificate", "Page Loading Speed", "Article Submission", "404 Error"], image: "/Images/SEO-Course/8.jpg" },
  { id: "content9", title: "Google Analytics", details: ["What is Google Analytics?", "Creating a Google Analytics GA4 Property", "Google Analytics Dashboard Overview",  "Real-Time Audience Overview",  "Audience Overview",  "Acquisition",  "Engagement", "Understanding Events and Event-Based Tracking", "Conversion", "Monetisation", "Regular Analysis and Optimization"], image: "/Images/SEO-Course/9.jpg" },
  { id: "content10", title: "Free & Paid SEO Tools", details: ["Keyword Planner", "Google Search Console", "Google Analytics",  "SEMrush",  "Ahrefs", "How to create a Schema Markup?", "SpyFu", "Ubersuggest", "Majestic", "Screaming Frog", "KWFinder", "Answer The Public", "Keyword Surfer", "SmallSEOTools", "SE Ranking"], image: "/Images/SEO-Course/10.jpg" },
  { id: "content11", title: "An Overview of Social Media Optimization", details: ["Profile Optimization", "Keyword Integration", "Content Consistency",  "Engagement Strategy",  "Visual Appeal",  "Hashtag Strategy",  "Cross-Promotion", "Shareable Content", "Social Sharing Buttons", "Video Optimization", "Call-to-Action (CTA)", "Mobile-Friendly Content", "Influencer Engagement", "Analytics and Insights", "Content Repurposing", "Employee Advocacy", "Geo-Targeting", "Customer Reviews and Testimonials", "Interactive Content", "Storytelling and Authenticity", "A/B Testing", "Social Media Advertising Optimization", "User Experience (UX)", "Incorporate Emojis and Visual Elements", "Stay Updated on Platform Changes"], image: "/Images/SEO-Course/11.jpg" },
  { id: "content12", title: "Facebook", details: ["Introduction to Facebook", "Setting Up a Facebook Profile", "Creating a Facebook Page",  "Navigating the Facebook Interface",  "Engagement Strategies",  "Creating Compelling Content",  "Facebook Insights and Analytics", "Using Facebook Live", "Running Facebook Ads", "Targeting and Audience Segmentation", "Facebook Page Management", "Facebook Groups and Community Building", "Facebook Events", "Facebook Contests and Giveaways", "Facebook Messenger Marketing", "Facebook for E-Commerce", "Facebook Insights for Business", "Facebook Pixel and Conversion Tracking", "Video Content Strategy", "Managing Facebook Reputation", "Advanced Ad Strategies", "Facebook Stories and Visual Content", "Crisis Management on Facebook", "Facebook for Nonprofits", "Facebook Advertising Budgeting"], image: "/Images/SEO-Course/12.jpg" },
  { id: "content13", title: "Instagram", details: ["Introduction to Instagram", "Creating an Instagram Account", "Navigating the Instagram App",  "Crafting Captivating Captions",  "Visual Storytelling",  "Utilizing Instagram Stories",  "Engagement Strategies", "Hashtags and Instagram Search", "Instagram Analytics and Insights", "Instagram Content Planning", "User-Generated Content (UGC)", "Influencer Collaboration on Instagram", "Instagram Advertising Basics", "Instagram Shopping and E-Commerce", "Instagram IGTV and Video Marketing", "Instagram Live and Live Streaming", "Instagram Reels and Short-Form Videos", "Instagram Hashtag Challenges", "Instagram Stories Highlights", "Instagram Insights for Business", "Instagram Influencer Marketing Strategy", "Instagram Community Building", "Instagram Aesthetics and Branding", "Instagram Engagement Campaigns", "Instagram Stories Ads and Strategies", "Instagram Insights Interpretation"], image: "/Images/SEO-Course/13.jpg" }, 
  { id: "content14", title: "Twitter", details: ["Introduction to Twitter", "Setting Up a Twitter Account", "Navigating the Twitter Interface", "Creating Compelling Tweets", "Using Hashtags and Mentions", "Engagement Strategies", "Content Planning and Strategy", "Visual Content on Twitter", "Twitter Analytics and Insights", "Twitter Etiquette and Best Practices", "Growing Your Twitter Following", "Twitter Lists and Organization", "Twitter Advertising Basics", "Advanced Advertising Techniques", "Twitter Analytics for Business", "Twitter Chat Participation", "Influencer Collaboration on Twitter", "Managing Social Media Crises on Twitter", "Measuring ROI on Twitter", "Using Twitter for Customer Service", "Twitter Trends and Virality", "Optimizing Twitter for SEO", "Privacy and Security on Twitter", "Using Twitter for Personal Branding", "Twitter for Networking and Relationship Building", "Integration with Other Social Media Platforms"], image:"/Images/SEO-Course/14.jpg"},
  { id: "content15", title: "LinkedIn", details: ["Introduction to LinkedIn", "Creating an Effective LinkedIn Profile", "Building a Strong Professional Network", "LinkedIn Networking Etiquette", "Leveraging LinkedIn Connections", "Crafting a Compelling LinkedIn Headline", "Using LinkedIn Posts and Articles", "Engagement and Interaction on LinkedIn", "Personal Branding on LinkedIn", "LinkedIn Profile Optimization", "LinkedIn Endorsements and Recommendations", "LinkedIn Job Search and Opportunities", "LinkedIn Groups and Community Engagement", "Creating a LinkedIn Company Page", "LinkedIn Sales Navigator", "LinkedIn Content Strategy", "Using LinkedIn Analytics", "LinkedIn Advertising Basics", "LinkedIn Profile Privacy and Security", "LinkedIn Influencer Strategies", "Maximizing LinkedIn Recommendations", "LinkedIn Learning Platform", "Using LinkedIn for Business Development"], image:"/Images/SEO-Course/15.jpg"},
  { id: "content16", title: "YouTube", details: ["Introduction to YouTube", "Creating a YouTube Channel", "Navigating the YouTube Studio", "Video Content Strategy", "YouTube Video Creation Techniques", "Optimizing Video Titles and Descriptions", "Thumbnails and Visual Branding", "Engagement Strategies on YouTube", "Using YouTube Analytics", "YouTube SEO (Search Engine Optimization)", "Growing Subscribers and Audience", "YouTube Monetization Basics", "Creating Compelling Intros and Outros", "YouTube Live Streaming", "YouTube Community and Interaction", "YouTube Content Calendar", "LinkedIn Content Strategy", "Collaborations and Cross-Promotions", "YouTube Shorts and Vertical Video Content", "YouTube Copyright and Fair Use", "YouTube Analytics for Business", "Managing YouTube Comments and Moderation", "Using YouTube for Educational Content", "YouTube Channel Branding and Identity", "YouTube for Nonprofits"], image:"/Images/SEO-Course/16.jpg"},
  { id: "content17", title: "Email Marketing", details: ["Introduction to Email Marketing", "Building an Email List", "Choosing an Email Marketing Platform", "Creating Effective Email Campaigns", "Email Content Planning", "Writing Compelling Subject Lines", "Personalization and Segmentation", "Designing Responsive Email Templates", "Call to Action (CTA) Strategies", "A/B Testing for Email Optimization", "Automated Email Workflows", "Email Analytics and Reporting", "Optimizing Email Deliverability", "Segmented Email Campaigns", "Transactional Emails and Notifications", "Email Personalization Beyond the Name", "Email Copywriting Techniques", "List Building and Lead Magnet Strategies", "Email Marketing Compliance and Regulations", "Email Retargeting and Remarketing", "Email Marketing for E-Commerce", "Creating Effective Landing Pages"], image:"/Images/SEO-Course/17.jpg"},
];

const Course = () => { 
  const [activeContent, setActiveContent] = useState("content1");

  return (
    <div className="main-div-basic-concepts-div">
      <div className="basic-concepts-div">
        <h1>Let’s just discuss the basic concepts of SEO Training</h1>
        <div className="main-container">
          <div className="button-panel">
            {seoModules.map((module) => (
              <button
                key={module.id}
                className={`btn ${activeContent === module.id ? "active" : ""}`}
                onClick={() => setActiveContent(module.id)}
              >
                {module.title}
              </button>
            ))}
          </div>

          <div className="display-container">
            {seoModules.map((module) => (
              <div
                key={module.id}
                className={`display-content ${activeContent === module.id ? "active" : ""}`}
              >
                <h4>{module.title}</h4>
                <br/>
                <ul>
                  {module.details.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <img src={module.image} alt={module.title} className="module-image" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
