import { Participant } from '@/app/data/participants';
import Image from 'next/image';
import Link from 'next/link';
import styles from './ParticipantCard.module.css';

export default function ParticipantCard({ participant }: { participant: Participant }) {
  const { name, github, bio } = participant;
  const avatarURL = `https://github.com/${github}.png`;

  return (
    <div className={styles.card}>
      <Image
        src={avatarURL}
        alt={`Avatar for ${name}`}
        width={100}
        height={100}
        className={styles.avatar}
      />
      <h3>{name}</h3>
      <p>{bio}</p>
      <Link href={`https://github.com/${github}`} target="_blank" className={styles.link}>
        @{github}
      </Link>
    </div>
  );
}