import dynamic from "next/dynamic";
import styled from "@emotion/styled";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


const ThemeToggle = dynamic(() => import("../components/ThemeToggle"), {
  ssr: false,
});

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 35vh;
`;


export default function Home() {
  return (
    <Container>
      <main>
        <h1 className={styles.h1}>Next.js dark mode toggle</h1>
        <h4>Dark mode is more than just a gimmick, right?!</h4>
        <ThemeToggle type="button" onClick={() => setActiveTheme(inactiveTheme)}/>
      </main>
      </Container>
  )
}
