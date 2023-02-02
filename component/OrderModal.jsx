import { Modal, useMantineTheme } from "@mantine/core";
import { useStore } from "../store/store";
import { useState } from "react";
import { createOrder } from "../lib/orderHandler";
import css from "../styles/OrderModal.module.css";
import { toast,Toaster } from "react-hot-toast";
import { useRouter } from "next/router";

export default function OrderModal({ opened, setopen, payment }) {
  const theme = useMantineTheme();
  const router = useRouter();
  const [Formdata,setFormdata] = useState({});
  const handleInput = (e) =>{
    setFormdata({...Formdata,[e.target.name]:e.target.value})
  }

  const resetCart = useStore((state)=>state.resetCart)
  const total = typeof window !== "undefined" && localStorage.getItem("total");

  const handleSubmit = async (e)=>{
    e.preventDefault();
    const id = await createOrder({...Formdata,total,payment})
    toast.success("Order Placcd")
    resetCart();
    {
      typeof window !== 'undefined' && localStorage.setItem('order',id)
    }

    router.push(`/order/${id}`)
  }
  

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      opened={opened}
      onClose={() => setopen(null)}
    >
      {/* Modal content */}
      <form onSubmit={handleSubmit} action="" className={css.formcontainer}>
        <input onChange={handleInput} type="text" name="name" required placeholder="Name" />
        <input onChange={handleInput} type="text" name="phone" required placeholder="Phone Number" />
        <textarea onChange={handleInput} name="address" rows={3} placeholder="Address"></textarea>
        <span>
          You have to pay<span>${total}</span>
        </span>
        <button type="submit" className="btn">
          Place Order
        </button>
      </form>
      <Toaster/>
    </Modal>
  );
}
