import React, {useState} from "react";
import Link from 'next/link';
import styles from "../../styles/Home.module.css";

import {firestore as db}  from '../../config/fire-config';
import firebase  from '../../config/fire-config';

export default function Admin() {

  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [content, setContent] = useState('');


  const [addArticle, setAddArticle] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();

    firebase.firestore()
    .collection('coaching')
    .add({
      title: title,
      content: content,
    });

    console.log({
      "title": title,
      "content": content
    });
    setTitle('');
    setSubTitle(' ');
    setContent('');
    setImage('');
  }


  const onImageChange = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  };


  const AddArticle = () => {
    setAddArticle(!addArticle)
  }

  function AddArticleDiv(){
    return (
      <div>
        <form onSubmit={handleSubmit}>

          <h2>Add title of the article:</h2>{" "}
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
        </form>

        <div className={styles.preview}>
          <h1 className={styles.title}>{title}</h1>
          <br></br>
          <h2  className={styles.subtitle}>{subTitle}</h2>
          <br></br>
          <div className={styles.articleImg}>
            <img src={image} alt="" />
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