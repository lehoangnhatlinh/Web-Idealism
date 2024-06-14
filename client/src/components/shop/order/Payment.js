import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const apiURL = process.env.REACT_APP_API_URL;

export const generateTransactionId = () => {
  return uuidv4();
};

export const createPaymentLink = async (payload) => {
  try {
    const response = await axios.post(`${apiURL}/create-payment-link`, payload);
    if (response.status === 200) {
      return response.data; // Giả sử server trả về URL thanh toán
    } else {
      throw new Error('Failed to create payment link');
    }
  } catch (error) {
    console.error("Error creating payment link:", error);
    throw error;
  }
};
