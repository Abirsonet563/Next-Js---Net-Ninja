import Link from 'next/link';
import styles from '../../styles/Ninjas.module.css'
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { ninjas: data }
  }
}

const ninja = ({ ninjas }) => {

  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map(ninja => (
        <Link href={'/ninja/' + ninja.id} 
        className={styles.single} 
        key={ninja.id}>
     
            <h3>{ninja.name}</h3>
       
        </Link>
      ))}
    </div>
  );
}
 
export default ninja;