/**
 * Test cases with jest
 */
// Import your fetchInscriptions function
import { fetchInscriptionForAddr } from '../apis/hiroInsByAddr';
import { addrHasInscription } from "../apis/hiroInsByAddr";
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();


// Enable fetch mocks
beforeEach(() => {
  fetchMock.resetMocks();
});

describe('fetchInscriptions', () => {
  it('fetches inscriptions successfully from an API', async () => {
    const mockResponse = {
      limit: 20,
      offset: 0,
      total: 1,
      results: [
        {
          id: "1e3ba4db931e67015e3d50f336b06584ea5b58067137aeadbe20db8e12b5e226i0",
          // Add the rest of the properties as needed for your test
        },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const inscriptionId = '1e3ba4db931e67015e3d50f336b06584ea5b58067137aeadbe20db8e12b5e226i0';
    const address = 'bc1qu7adnr8pxpaelm83xlhf0979dzxzjs2qucjh49';
    
    const response = await fetchInscriptionForAddr(inscriptionId, address);

    // Check if the fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(`https://api.hiro.so/ordinals/v1/inscriptions?id=${inscriptionId}&address=${address}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    // Verify the structure of the response
    expect(response).toEqual(mockResponse);
  });
  it('Should return true that our mock response has the inscription', async () => {
    const mockResponse = {
      limit: 20,
      offset: 0,
      total: 1,
      results: [
        {
          id: "1e3ba4db931e67015e3d50f336b06584ea5b58067137aeadbe20db8e12b5e226i0",
          // Add the rest of the properties as needed for your test
        },
      ],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const inscriptionId = '1e3ba4db931e67015e3d50f336b06584ea5b58067137aeadbe20db8e12b5e226i0';
    const address = 'bc1qu7adnr8pxpaelm83xlhf0979dzxzjs2qucjh49';
    
    const response = await addrHasInscription(address, inscriptionId);

    // Check if the fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(`https://api.hiro.so/ordinals/v1/inscriptions?id=${inscriptionId}&address=${address}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    // Verify the structure of the response
    expect(response).toEqual(true);
  });
  it('Should return false that our mock response does not have the inscription', async () => {
    const mockResponse = {
      limit: 20,
      offset: 0,
      total: 0,
      results: [],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const inscriptionId = '1e3ba4db931e67015e3d50f336b06584ea5b58067137aeadbe20db8e12b5e226i0';
    const address = 'bc1qu7adnr8pxpaelm83xlhf0979dzxzjs2qucjh49';
    
    const response = await addrHasInscription(address, inscriptionId);

    // Check if the fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith(`https://api.hiro.so/ordinals/v1/inscriptions?id=${inscriptionId}&address=${address}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });

    // Verify the structure of the response
    expect(response).toEqual(false);
  });
});
