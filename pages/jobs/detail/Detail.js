import Layout from "../../../components/Layout";
import TabMenu from "../../../components/tabMenu/TabMenu";

const Detail = () => {
  return (
    <>
      {/* <Header />
      <div className="jobDetail">
        <Left />
        <div className="middle">
          <TabMenu />
          <div className="jobDescription">
            <div className="title">
              <p className="job-title">UI/UX Designer / Frontend Engineer </p>
              <p className="job-type">Full-time</p>
            </div>
            <div className="detail">
              <p className="position">
                Creative Thoughts Informatics in Indore, MP, INDIA
              </p>
              <p className="date">2 days ago</p>
            </div>
            <div>
              <p>Job Description</p>
              <p>
                Morbi sem erat, molestie ornare nisl mollis, tempor letis mauris
                cras hendrerit, neque cursus Morbi sem erat, fdeto molestie.
                Morbi sem erat, molestie ornare nisl mollis, tempor letis mauris
                cras hendrerit, neque cursus Morbi sem erat, molestie.
              </p>
            </div>
            <div>
              <p>Salary Criteria</p>
              <p>3, 00, 000 - 5, 00, 000 lakh per annum</p>
            </div>
          </div>
          <div className="upload">
            <p>Upload your resume .pdf</p>
            <div>
              <button>
                <p>Apply Now</p>
              </button>
            </div>
          </div>
          <div className="create">
            <button className="createResume">Create Resume</button>
          </div>
        </div>
        <Right />
      </div>
      <Footer /> */}
      <Layout
        leftContent={<Left />}
        // centerContent={<Middle />}
        rightContent={<Right />}
      />
    </>
  );
};

export default Detail;
