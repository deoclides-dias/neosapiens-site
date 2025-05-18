import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>NeoSapiens | Teste</title>
      </Head>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>Teste de Renderização</h1>
        <p>Se você está vendo esta mensagem, a renderização básica está funcionando.</p>
      </div>
    </>
  );
}
