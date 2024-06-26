import { createOrder } from "./FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchbrainTree = async (getBrainTreeToken, setState) => {
  try {
    let responseData = await getBrainTreeToken();
    if (responseData && responseData) {
      setState({
        clientToken: responseData.clientToken,
        success: responseData.success,
      });
      console.log(responseData);
    }
  } catch (error) {
    console.log(error);
  }
};

function generateRandomTransactionId(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export const pay = async (
  data,
  dispatch,
  state,
  setState,
  // getPaymentProcess,
  totalCost,
  history
) => {
  console.log(state);
  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
    console.log("sdsd1", data)

  } else if (!state.phone) {
    console.log("sdsd2", data)

    setState({ ...state, error: "Please provide your phone number" });
  } else {
    //   let nonce;
    //   state.instance
    //     .requestPaymentMethod()
    //     .then((data) => {
    //       dispatch({ type: "loading", payload: true });
    //       nonce = data.nonce;
    //       let paymentData = {
    //         amountTotal: totalCost(),
    //         paymentMethod: nonce,
    //       };
    //       getPaymentProcess(paymentData)
    //         .then(async (res) => {
    //           if (res) {
    let orderData = {
      allProduct: JSON.parse(localStorage.getItem("cart")),
      user: JSON.parse(localStorage.getItem("jwt")).user._id,
      amount: totalCost(),
      transactionId: generateRandomTransactionId(8),
      address: state.address,
      phone: state.phone,
    };
    console.log("sdsd", orderData)

    try {
      let resposeData = await createOrder(orderData);
      if (resposeData.success) {
        localStorage.setItem("cart", JSON.stringify([]));
        dispatch({ type: "cartProduct", payload: null });
        dispatch({ type: "cartTotalCost", payload: null });
        dispatch({ type: "orderSuccess", payload: true });
        setState({ clientToken: "", instance: {} });
        dispatch({ type: "loading", payload: false });
        return history.push("/");
      } else if (resposeData.error) {
        console.log(resposeData.error);
      }
    } catch (error) {
      console.log(error);
    }
    //   }
    // })
    //         .catch((err) => {
    //           console.log(err);
    //         });
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //       setState({ ...state, error: error.message });
    //     });
  }
};

// import { createOrder } from "./FetchApi";

// export const fetchData = async (cartListProduct, dispatch) => {
//   dispatch({ type: "loading", payload: true });
//   try {
//     let responseData = await cartListProduct();
//     if (responseData && responseData.Products) {
//       setTimeout(function () {
//         dispatch({ type: "cartProduct", payload: responseData.Products });
//         dispatch({ type: "loading", payload: false });
//       }, 1000);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const fetchbrainTree = async (getBrainTreeToken, setState) => {
//   try {
//     let responseData = await getBrainTreeToken();
//     if (responseData && responseData) {
//       setState({
//         clientToken: responseData.clientToken,
//         success: responseData.success,
//       });
//       console.log(responseData);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// export const pay = async (
//   totalCost, history, state, dispatch, getCheckoutUrl, setState
// ) => {
//   console.log(state); 
//   if(!state.address) {
//     setState({ ...state, error: "Please provide your address"}); 
//   }else if(!state.phone) {
//     setState({ ...state, error: "Please provide your phone number"}); 
//   }else{
//     dispatch({type: "loading", payload: true}); 
//     try {
//       const payoutData = await getCheckoutUrl({ ...DataTransfer, ...state, amountTotal: totalCost() })
//       const [error, url] = payoutData;
//       if(!error) {
//         window.location.href = url;
//       }else{
//         setState({ ...state, error}); 
//       }
//     } catch (error) {
//       console.log(error)
//       setState({ ...state, error: error.message}); 
//     }
//   }
// };


// export const pay = async (
//   data,
//   dispatch,
//   state,
//   setState,
//   getPaymentProcess,
//   totalCost,
//   history
// ) => {
//   console.log(state);
//   if (!state.name) {
//     setState({ ...state, error: "Please provide your name" });
//   } else if (!state.address) {
//     setState({ ...state, error: "Please provide your address" });
//   }else if(!state.phone) {
//     setState({ ...state, error: "Please provide your phone number" });
//   }else {
//     let nonce;
//     state.instance
//       .requestPaymentMethod()
//       .then((data) => {
//         dispatch({ type: "loading", payload: true });
//         nonce = data.nonce;
//         let paymentData = {
//           amountTotal: totalCost(),
//           paymentMethod: nonce,
//         };
//         getPaymentProcess(paymentData)
//           .then(async (res) => {
//             if (res) {
//               let orderData = {
//                 allProduct: JSON.parse(localStorage.getItem("cart")),
//                 user: JSON.parse(localStorage.getItem("jwt")).user._id,
//                 amount: res.transaction.amount,
//                 transactionId: res.transaction.id,
//                 address: state.address,
//                 phone: state.phone,
//                 name: state.name
//               };
//               try {
//                 let resposeData = await createOrder(orderData);
//                 if (resposeData.success) {
//                   localStorage.setItem("cart", JSON.stringify([]));
//                   dispatch({ type: "cartProduct", payload: null });
//                   dispatch({ type: "cartTotalCost", payload: null });
//                   dispatch({ type: "orderSuccess", payload: true });
//                   setState({ clientToken: "", instance: {} });
//                   dispatch({ type: "loading", payload: false });
//                   return history.push("/");
//                 } else if (resposeData.error) {
//                   console.log(resposeData.error);
//                 }
//               } catch (error) {
//                 console.log(error);
//               }
//             }
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((error) => {
//         console.log(error);
//         setState({ ...state, error: error.message });
//       });
//   }
// };
