import React, { useState } from 'react';
import styles from '../../styles/addforms.module.css';

const AddForms = () => {
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

  return (
    <div className={styles.container}>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.formGroup}>
            <label className={styles.formName} htmlFor="formName">Form Name:</label>

            <label className={styles.providedBy} htmlFor="providedBy">Provided By:</label>

          <br></br>

            <input type="text" className={styles.formNames} name="formName" value={formName} 
            onChange={(event) => setFormName(event.target.value)}/>

            <input type="text" className={styles.providedBy} name="providedBy" value={providedBy}
            onChange={(event) => setProvidedBy(event.target.value)}/>

        </div>

        <div className={styles.formGroup}>
          <label className={styles.categLabel} htmlFor="category">Category:</label>
          <label className={styles.statLabel} htmlFor="status">Status:</label>
          <label htmlFor="file">Choose File:</label>
        </div>

        <div className={styles.formGroup}>
        <select
            className={styles.category}
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
            className={styles.status}
            name="status"
            value={status}
            onChange={(event) => setStatus(event.target.value)}
          >
            <option disabled value="">Select</option>
            <option value="available">Available</option>
            <option value="unavailable">Unavailable</option>
          </select>

          <input type="file" className={styles.file} name="file" onChange={handleFileInputChange} />

            </div>


        <div className={styles.formGroup}>
          <label htmlFor="description">Description:</label>
          <input 
          className={styles.description}
          type="text" 
          name="description" 
          value={description} 
          onChange={(event) => setDescription(event.target.value)}/>
        </div>

        
        <div className={styles.center}>   
        <button className={styles.button} type="submit">Add Form</button>
        </div>
      </form>
    </div>
  );
};

export default AddForms;
