// pages/secret/[id].js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const SecretPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [secret, setSecret] = useState('');

  useEffect(() => {
    if (id) {
      fetch(`/api/getSecret?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSecret(data.secret);
        });
    }
  }, [id]);

  return (
    <div>
      {secret ? (
        <div>
          <p>Your secret is:</p>
          <p>{secret}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SecretPage;
