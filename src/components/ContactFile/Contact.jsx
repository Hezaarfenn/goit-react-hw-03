import styles from './Contant.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
  return (
    <div className={styles.contact}>
      <div>
        <p>{name}</p>
        <p>{number}</p>
      </div>
      <button
        className={styles.deleteBtn}
        type="button"
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
