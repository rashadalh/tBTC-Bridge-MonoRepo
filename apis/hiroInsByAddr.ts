// Define an interface to type the response
export interface InscriptionResponse {
    limit: number;
    offset: number;
    total: number;
    results: Inscription[];
  }
  
  export interface Inscription {
    id: string;
    number: number;
    address: string;
    genesis_address: string;
    genesis_block_height: number;
    genesis_block_hash: string;
    genesis_tx_id: string;
    genesis_fee: string;
    genesis_timestamp: number;
    tx_id: string;
    location: string;
    output: string;
    value: string;
    offset: string;
    sat_ordinal: string;
    sat_rarity: string;
    sat_coinbase_height: number;
    mime_type: string;
    content_type: string;
    content_length: number;
    timestamp: number;
    curse_type: null | string;
    recursive: boolean;
    recursion_refs: null | string[];
  }
  
  // Function to fetch inscriptions
  export async function fetchInscriptionForAddr(inscriptionId: string, address: string): Promise<InscriptionResponse | null> {
    try {
      const response = await fetch(`https://api.hiro.so/ordinals/v1/inscriptions?id=${inscriptionId}&address=${address}`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data: InscriptionResponse = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching inscriptions: ", error);
      return null; // Return null or appropriate error handling
    }
  }

export async function addrHasInscription (address: string, inscriptionId: string): Promise<boolean> {
    const inscriptions = await fetchInscriptionForAddr(inscriptionId, address);
    if (inscriptions) {
        return inscriptions.results.length > 0;
    }
    return false;
 }
  
//   // Example usage
//   const inscriptionId = '1e3ba4db931e67015e3d50f336b06584ea5b58067137aeadbe20db8e12b5e226i0';
//   const address = 'bc1qu7adnr8pxpaelm83xlhf0979dzxzjs2qucjh49';
//   fetchInscriptions(inscriptionId, address)
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
  