import { useState, useEffect } from "react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/storage";
import Sidebar from '../components/sidebar';
import styles from '../../styles/sidebar.module.scss';


function App() {

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);

    // Handles input change event and updates state
    function handleChange(event) {
        setFile(event.target.files[0]);

    }

    function handleUpload() {
        if (!file) {
            alert("Please choose a file first!")
        }
        const storageRef = ref(storage, `${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on("state_changed",
            (snapshot) => {
                const percent = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                //update progress
                setPercent(percent);

            },
            (err) => console.log(err),
            () => {
                // download url
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    console.log(url);
                });
            }
        );



    };

    useEffect(() => {
        if (percent === 100) {
            window.location.reload();
        }
    }, [percent]);

    return (

        <div>
            <Sidebar />
            <div className={styles.general}>
                <input type="file" accept="application/pdf,image/*" onChange={handleChange} />
                <button onClick={handleUpload}>Upload to Firebase</button>
                <p>{percent} "% done"</p>

                <form>
                    <label>Form name:</label>
                    <input type="text"></input>
                    <label>Provided by:</label>
                    <input type="text"></input>
                </form>
            </div>
        </div>






    );
}

export default App;
