import { Download } from "lucide-react";
import resume from '/Resume/resume.pdf'

const ResumeSection = () => {

    return (
        <section className="resume-section" style={{ textAlign: "center", padding: "40px 0" }}>
            <h2>Looking to Hire?</h2>
            <p style={{ marginBottom: "20px" }}>
                Whether you are looking for a full-time employee or a freelance expert, I’m available for opportunities.
            </p>
            <div
                className="resume-download"
                style={{
                    display: "inline-flex",
                    alignItems: "center",
                    padding: "10px 20px",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    borderRadius: "5px",
                    textDecoration: "none",
                    fontWeight: "bold",
                }}
            >
                <span>Download My Resume</span>
                <a
                    href={resume}
                    download
                    style={{
                        marginLeft: "10px",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center"
                    }}
                >
                    <Download size={24} />
                </a>
            </div>
        </section>
    );
};

export default ResumeSection;
