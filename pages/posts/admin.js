import React, { useState } from "react";
import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { storage, firebaseApp} from "../../config/fire-config";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

export default function Admin() {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [content, setContent] = useState("");

  const [addArticle, setAddArticle] = useState(false);

  const allInputs = {imgUrl: ''}
  const [imageAsFile, setImageAsFile] = useState('')
  const [imageAsUrl, setImageAsUrl] = useState(allInputs)

  console.log(imageAsUrl)

  const handleImageAsFile = (e) => {
       const image = e.target.files[0]
       setImageAsFile(imageFile => (image))
   }
 

  const handleSubmit = (event) => {
    event.preventDefault()

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

    firebaseApp.firestore()
    .collection("coaching")
    .add({
      title: title,
      content: content,
      subTitle: subTitle
    });

    console.log({
      title: title,
      content: content,
    });
    setTitle("");
    setSubTitle(" ");
    setContent("");
  };

  const AddArticle = () => {
    setAddArticle(!addArticle);
  };

  function AddArticleDiv() {
    return (
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Add title of the Coaching article:</h2>{" "}
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          ></input>
          <h2>Add subtitle of the article: </h2>
          <input
            type="text"
            value={subTitle}
            onChange={({ target }) => setSubTitle(target.value)}
          />
          <h2>Content</h2> <br></br>
          <textarea
            value={content}
            onChange={({ target }) => setContent(target.value)}
          />
          <h2>Add an image for your article: </h2>
          <div>
            <input type="file"
             onChange={(e) => handleImageAsFile(e)}
              />
          </div>
          <button type="submit">Save</button>
        </form>
        {/* TODO Add the same logic to YOGA page */}
        {/* <form onSubmit={handleSubmit}>

          <h2>Add title of the Yoga  article:</h2>{" "}
          <input
            type="text"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
          ></input>
          <h2>Add subtitle of the article: </h2> 
          <input
            type="text"
            value={subTitle}
            onChange={({ target }) => setSubTitle(target.value)}
          />
            <h2>Content</h2> <br></br>
            <textarea
              value={content}
              onChange={({ target }) => setContent(target.value)}
            />
          <h2>Add an image for your article: </h2>
          <div>
            <input type="file" onChange={(e) => onImageChange(e)} />
          </div>
          <button type="submit">Save</button>
        </form> */}
        <div className={styles.preview}>
          <h1 className={styles.title}>{title}</h1>
          <br></br>
          <h2 className={styles.subtitle}>{subTitle}</h2>
          <br></br>
          <div className={styles.articleImg}>
            <img src={imageAsUrl.imgUrl} alt="image tag" />
          </div>
          <div className={styles.articleContent}>
            <p>{content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1 className={styles.title}>ADMIN SPACE</h1>
      <h2 className={styles.subtitle}>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>

      <button onClick={(e) => AddArticle(e)}>Add Article</button>

      {addArticle ? AddArticleDiv() : null}
    </>
  );
}
