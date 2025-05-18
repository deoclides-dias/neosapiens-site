import Head from 'next/head';
import Layout from '../components/layout/Layout';

export default function Home() {
  return (
    <>
      <Head>
        <title>NeoSapiens | Teste de Layout</title>
      </Head>
      <Layout>
        <div style={{ padding: '100px 20px', textAlign: 'center' }}>
          <h1>Teste do Layout</h1>
          <p>Se você está vendo esta mensagem dentro do layout com cabeçalho e rodapé, o layout está funcionando.</p>
        </div>
      </Layout>
    </>
  );
}
