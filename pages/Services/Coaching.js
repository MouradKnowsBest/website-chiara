import { useState, useEffect }  from "react";
import styles from "../../styles/Home.module.css";
import fire from '../../config/fire-config.js';

export default function Coaching() {

  const [coachingArticles, setBlogs] = useState([]);

  useEffect(() => {
      fire.firestore()
        .collection('coaching')
        .onSnapshot(snap => {
          const blogs = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setBlogs(blogs);

        });
    }, []);
  console.log(coachingArticles)



  return (
    <div className={styles.container}>
      <div className={styles.subcontainer}>
        <div className={styles.articleTitle}>
          <h1> First Post Coaching Article</h1>
        </div>

        <div className={styles.articleImg}>
          <img src="../coaching.jpg" alt="chiara-portrait"></img>
        </div>
        <div className={styles.articleContent}>
          <p>
            This paper describes the use of coaching as a means to enhance
            professional development of English‐language teachers in a school
            involved in a partnership project in Hong Kong, which is
            characterised in terms of three phases. While the rationale for
            bringing in coaches into the school is on creating effective
            professional development environments for teachers—that is,
            providing ongoing supports and forming a community of practice
            focused on instructional methods, curriculum innovation, and new
            formats for instructional delivery—after 18 months of the
            partnership project it was found that the teacher/coach relationship
            is more complicated than expected. The paper will end with
            suggestions on how the three key stakeholders, namely the teachers,
            principal and teacher educators, can co‐construct effective
            professional development environments.
          </p>
        </div>


        <div className={styles.allArticles}>
          {coachingArticles.map((coachingArticle) => (
            <div className={styles.oneArticle}>
              <ul>
                <li key={coachingArticle.id}>
                  <h1> {coachingArticle.title}</h1>
                  <h2> {coachingArticle.subTitle}</h2>
                  <p className={styles.articleContent}>
                    {" "}
                    {coachingArticle.content}
                  </p>
                </li>
              </ul>
            </div>
          ))}
        </div>

        <a href="../" target="_blank" className={styles.BackHome}>
          🢀 Get Back Home
        </a>
      </div>
    </div>
  );
}
