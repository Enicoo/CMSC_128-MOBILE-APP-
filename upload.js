import { useState, useEffect } from "react"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebase/storage";
import Sidebar from '../components/sidebar';
import styles from '../../styles/sidebar.module.scss';
import styles1 from '../../styles/addforms.module.css';
import AddForms from "./add";


function App() {

    const [file, setFile] = useState("");
    const [percent, setPercent] = useState(0);
    const [formName, setFormName] = useState('');
    const [providedBy, setProvidedBy] = useState('');
    const [category, setCategory] = useState('');
    const [status, setStatus] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [description, setDescription] = useState('');

    const handleFormSubmit = (event) => {
        event.preventDefault();
        // code to submit the form data to the backend
    };

    const handleFileInputChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };
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
            <div className={styles1.container}>
                <form onSubmit={handleFormSubmit}>
                    <div className={styles1.formGroup}>
                        <label className={styles1.formName} htmlFor="formName">Form Name:</label>

                        <label className={styles1.providedBy} htmlFor="providedBy">Provided By:</label>

                        <br></br>

                        <input type="text" className={styles1.formNames} name="formName" value={formName}
                            onChange={(event) => setFormName(event.target.value)} />

                        <input type="text" className={styles1.providedBy} name="providedBy" value={providedBy}
                            onChange={(event) => setProvidedBy(event.target.value)} />

                    </div>

                    <div className={styles1.formGroup}>
                        <label className={styles1.categLabel} htmlFor="category">Category:</label>
                        <label className={styles1.statLabel} htmlFor="status">Status:</label>
                        <label htmlFor="file">Choose File:</label>
                    </div>

                    <div className={styles1.formGroup}>
                        <select
                            className={styles1.category}
                            name="category"
                            value={category}
                            onChange={(event) => setCategory(event.target.value)}
                        >
                            <option disabled value="">Select</option>
                            <option value="student">Student</option>
                            <option value="faculty">Faculty</option>
                            <option value="staff">Staff</option>
                            <option value="admission">Admission</option>
                            <option value="fin_aid">Financial Aid</option>
                            <option value="acad_rec">Academic Records</option>
                            <option value="faci">Facilities</option>
                            <option value="others">Others</option>
                        </select>

                        <select
                            className={styles1.status}
                            name="status"
                            value={status}
                            onChange={(event) => setStatus(event.target.value)}
                        >
                            <option disabled value="">Select</option>
                            <option value="available">Available</option>
                            <option value="unavailable">Unavailable</option>
                        </select>

                        <input className={styles1.file} type="file" accept="application/pdf,image/*" onChange={handleChange} />

                    </div>


                    <div className={styles1.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <input
                            className={styles1.description}
                            type="text"
                            name="description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)} />
                    </div>


                    <div className={styles1.center}>
                        <button className={styles1.button} onClick={handleUpload}>Upload</button>
                    </div>
                </form>
            </div>

            <div className={styles.general}>
                <p>{percent} "% done"</p>
            </div>
        </div>










    );
}

export default App;

