const fs = require("fs");
const axios = require("axios");
const cheerio = require("cheerio");
const mjml = require("mjml");
const { exec } = require("child_process")

const lockFilePath = './.git/index.lock';
if (fs.existsSync(lockFilePath)) {
  fs.unlinkSync(lockFilePath);
  console.log("🧹 Cleaned up leftover Git lock file." )
}

// const nodemailer = require("nodemailer");


async function updateMjmlEmail() {

    
    let mjmlTemplate = fs.readFileSync("index.mjml", "utf-8");

  const email = `
    <!-- Header -->
    <mj-section background-color="#ffffff" padding="24px 20px 10px">
      <mj-column>
        <mj-text font-size="20px">
          Hello {{ first_name|default:'Leader' }},
        </mj-text>
        <mj-text font-size="26px" font-weight="700">
          Meeting Recap & Action Plan
        </mj-text>
        <mj-text color="#555555">
          Thank you for your time and support. Below is a clear recap of what we discussed, along with decisions and next steps.
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Meeting Info -->
    <mj-section background-color="#ffffff" padding="0 20px 20px">
      <mj-column>
        <mj-text>
          <strong>Meeting Date:</strong> [Sunday, Month Day, Year]<br />
          <strong>Topic:</strong> [Meeting Topic / Purpose]<br />
          <strong>Attendees:</strong> [Names / Ministries / Teams]
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Key Goals -->
    <mj-section background-color="#FAFAFA" padding="16px 20px">
      <mj-column>
        <mj-text font-size="18px" font-weight="700" align="center">
          Key Goals Discussed
        </mj-text>
        <mj-text>
          • [Goal #1]<br />
          • [Goal #2]<br />
          • [Goal #3]
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Decisions Made -->
    <mj-section background-color="#ffffff" padding="20px">
      <mj-column>
        <mj-text font-size="18px" font-weight="700" align="center">
          Decisions / Agreements
        </mj-text>
        <mj-text>
          • [Decision #1]<br />
          • [Decision #2]<br />
          • [Decision #3]
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Action Items -->
    <mj-section background-color="#ffffff" padding="0 20px 10px">
      <mj-column>
        <mj-text font-size="18px" font-weight="700" align="center">
          Action Items & Ownership
        </mj-text>
        <mj-text>
          <strong>1) [Action Item]</strong><br />
          Owner: [Name] · Due: [Date]<br /><br />

          <strong>2) [Action Item]</strong><br />
          Owner: [Name] · Due: [Date]<br /><br />

          <strong>3) [Action Item]</strong><br />
          Owner: [Name] · Due: [Date]
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Notes / Logistics -->
    <mj-section background-color="#FAFAFA" padding="16px 20px">
      <mj-column>
        <mj-text font-size="18px" font-weight="700" align="center">
          Notes & Logistics
        </mj-text>
        <mj-text>
          • [Any important detail, approvals needed, budgets, schedules, constraints]<br />
          • [Anything that must be communicated consistently to the community]<br />
          • [Risks / concerns and how we plan to address them]
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- CTA / Confirmation -->
    <mj-section background-color="#ffffff" padding="20px">
      <mj-column align="center">
        <mj-text align="center" color="#555555">
          Please reply to confirm your action items, or share any updates/corrections.
        </mj-text>
        <mj-button href="mailto:[your-email@example.com]?subject=Meeting%20Recap%20-%20Confirmation">
          Reply to Confirm
        </mj-button>
      </mj-column>
    </mj-section>

    <!-- Next Meeting -->
    <mj-section background-color="#ffffff" padding="0 20px 20px">
      <mj-column>
        <mj-divider border-color="#dddddd" />
        <mj-text>
          <strong>Next Check-In:</strong> [Day, Date] at [Time]<br />
          <strong>Location:</strong> [Where / Zoom Link]<br />
          <strong>Agenda Preview:</strong> [1–2 bullets]
        </mj-text>
      </mj-column>
    </mj-section>

    <!-- Footer -->
    <mj-section background-color="#ffffff" padding="14px 20px">
      <mj-column>
        <mj-text font-size="12px" color="#888888" align="center">
          Thank you for your leadership and dedication. If anything above needs adjusting, reply to this email and I’ll update the recap.
        </mj-text>
        <mj-text font-size="12px" color="#aaaaaa" align="center">
          © 2026 [Organization / Parish Name]
        </mj-text>
      </mj-column>
    </mj-section>

    `;

    mjmlTemplate = mjmlTemplate.replace("{{BULLETIN}}", email)

    fs.writeFileSync("meeting.mjml", mjmlTemplate, "utf-8")
    console.log('Generated MJML email saved as output.mjml');

    // Convert MJML to HTML
    const emailHtml = mjml(mjmlTemplate).html;
    fs.writeFileSync("resume-de-reunion.html", emailHtml, "utf8");

    console.log('Generated HTML email saved as new-bulletin.html');
    

}


updateMjmlEmail();

// Add a border on the image of the bulletin and add a title tag for the email bar
// Added a github automatic push as the background using pm2,
// make sure to have ssh installed in github as a key, and clone as ssh for macbook
// Would need to update every Monday instead of every tuesday and set pm2 up again to happen every Monday
