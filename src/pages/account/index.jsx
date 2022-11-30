import { unstable_getServerSession } from 'next-auth/next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

import Layout from 'components/account/Layout';
import { Container } from 'components/common/Container';
import seo from 'data/seo';
import ButtonOld from '../../components/common/ButtonOld';
import { authOptions } from '../api/auth/[...nextauth]';

export default function Account() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{`Account Settings | ${seo.title}`}</title>
      </Head>

      <Container>
        <h1>Account Settings</h1>
        <ButtonOld
          onClick={() => {
            router.push('/');
          }}>
          Home
        </ButtonOld>
        <p>Welcome, {session?.user.name}</p>
      </Container>
    </>
  );
}

Account.getLayout = function (page) {
  return <Layout>{page}</Layout>;
};

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

  if (!session) {
    return {
      redirect: {
        destination: `/api/auth/signin?callbackUrl=/account`,
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}
