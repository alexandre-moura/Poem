import React, {useEffect, useState} from 'react';

import {Text, View} from 'react-native';

interface ApiResponse {
  title: string;
  author: string;
  lines: Array<string>;
  linecount: string;
}

const fetchPoem = async (): Promise<ApiResponse[]> => {
  try {
    const response = await fetch(
      'https://poetrydb.org/author/Edgar%20Allan%20Poe',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data: ApiResponse[] = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error fetching data');
  }
};

function Poem(): React.ReactNode {
  const [poem, setPoem] = useState<ApiResponse[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPoem()
      .then(data => setPoem(data))
      .catch((err: Error) => setError(err.message));
  }, []);

  return (
    <View>
      {error && <Text>Error: {error}</Text>}
      {poem ? (
        <View>
          {poem.map(item => (
            <Text>{JSON.stringify(item)}</Text>
          ))}
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
}

export default Poem;
