import { participants } from '@/app/data/participants';
import ParticipantCard from '@/app/components/ParticipantCard';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <h1>Meet the Workshop Participants!</h1>
        <p>This page is generated from participants pull requests.</p>
      </div>

      <div className={styles.cardContainer}>
        {participants.map((person) => (
          <ParticipantCard key={person.github} participant={person} />
        ))}
      </div>
    </main>
  );
}