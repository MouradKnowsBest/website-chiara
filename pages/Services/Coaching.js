import { useState, useEffect }  from "react";
import styles from "../../styles/Home.module.css";
import {firebaseApp} from "../../config/fire-config";
import 'firebase/compat/firestore';
import { storage} from "../../config/fire-config";

export default function Coaching() {

  const [coachingArticles, setBlogs] = useState([]);
  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)


// TODO Handle images grabing by group and then splitting by it's article

// TODO Add option of deleting articles from DB

// TODO add date and author options on article editing component

// TODO add option of order articles by date

  useEffect(() => {
    firebaseApp.firestore()
        .collection('coaching')
        .onSnapshot(snap => {
          const blogs = snap.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setBlogs(blogs);
        });


        console.log('start of upload')
        // async magic goes here...
        if(imageAsFile === '') {
          console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        //initiates the firebase side uploading 
        uploadTask.on('state_changed', 
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot)
        }, (err) => {
          //catches the errors
          console.log(err)
        }, () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage.ref('images').child(imageAsFile.name).getDownloadURL()
           .then(fireBaseUrl => {
             setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
           })
        })

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

        {/* TODO Order Articles by publication time */}

        <div className={styles.allArticles}>
          {coachingArticles.map((coachingArticle) => (
            <div className={styles.oneArticle}>
              <ol>
                <li key={coachingArticle.id}>
                  <li>
                    {" "}
                    <h1> {coachingArticle.title}</h1>
                  </li>
                  <li>
                    {" "}
                    <h2> {coachingArticle.subTitle}</h2>
                  </li>
                  <li>
                    {" "}
                    <p className={styles.articleContent}>
                      {" "}
                      {coachingArticle.content}
                    </p>
                  </li>
                </li>
                <div className={styles.articleImg}>
                  <img src={imageAsUrl.imgUrl} alt="image tag" />
                </div>
              </ol>
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
