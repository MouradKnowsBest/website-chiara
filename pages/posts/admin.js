import React, {useState} from "react";
import Link from 'next/link';
import styles from "../../styles/Home.module.css";

export default function Admin() {

  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  // const [subtitle, subTitle] = useState();

  const [addArticle, setAddArticle] = useState(false);


  const onImageChange = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    setImage(URL.createObjectURL(file));
  };

  const onTitleChange = (e) => {
    e.preventDefault();
    const [file] = e.target.files;
    setTitle(URL.createObjectURL(file));
  };

  const AddArticle = (e) => {
    e.preventDefault();
    setAddArticle(!addArticle)
  }

  function AddArticleDiv(){
    return (
      <div>
        <h2>Add title of the article:</h2>{" "}
        <input onChange={(e) => onTitleChange(e)}></input>
        <h2>Add subtitle of the article: </h2> <input></input>
        <h2>Add an image for your article: </h2>
        <div>
          <input type="file" onChange={(e) => onImageChange(e)} />
        </div>



        <div>

        {title}

        {subtitle}

        <div className={styles.articleImg}>
          <img src={image} alt="" />
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