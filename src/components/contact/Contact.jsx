// App.js
import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    purposeOfContact: "",
    desc: "",
  });

  const fieldChangeHandler = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "mitprajapati0311@gmail.com"; // Replace with your email address
    const subject = "Message from Contact Form of Rang Pharam Webapp";
    const body = `Name: ${formData.fullName}\nEmail: ${formData.contactNumber ? formData.contactNumber : "NA"}\nPurposeOfMessage: ${formData.purposeOfContact}\nDescription:${formData.desc}`;
    const url = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  };

  console.log("formdataa",formData)

  return (
    <Box
      className="flex flex-col items-center p-6 max-w-lg mx-auto"
      sx={{
        boxShadow: 3,
        borderRadius: 2,
        mt: 16,
        bgcolor: "#D8DBBD;", // Set the form background color to a light gray
      }}
    >
      <Typography
        variant="h5"
        className="mb-6 text-center font-semibold"
        style={{ marginBottom: "12px" }}
      >
        Let's Connect
      </Typography>
      <form className="w-full flex flex-col gap-4">
        <TextField
          label="Full Name"
          type="text"
          onChange={fieldChangeHandler}
          fullWidth
          variant="outlined"
          size="small"
          name="fullName"
          className="bg-gray-100" // TextField background remains light gray
          required
        />
        <TextField
          label="Contact Number"
          size="small"
          type="number"
          onChange={fieldChangeHandler}
          fullWidth
          name="contactNumber"
          variant="outlined"
          className="bg-gray-100"
        />
        <TextField
          label="Email"
          type="email"
          size="small"
          name="email"
          onChange={fieldChangeHandler}
          fullWidth
          variant="outlined"
          className="bg-gray-100"
          required
        />
        <TextField
          label="Purpose of Contact"
          type="text"
          onChange={fieldChangeHandler}
          fullWidth
          name="purposeOfContact"
          size="small"
          variant="outlined"
          className="bg-gray-100"
          required
        />
        <TextField
          label="Detailed Description"
          multiline
          name="desc"
          onChange={fieldChangeHandler}
          rows={4}
          fullWidth
          variant="outlined"
          className="bg-gray-100"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          className="mt-4"
          sx={{ textTransform: "none" }}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
