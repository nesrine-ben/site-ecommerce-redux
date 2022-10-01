import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

const Cancel = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/');
  }, []);

  return null
}

export default Cancel