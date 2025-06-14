import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from "../constants/http";

export const tagFromUrl = async (req, res) => {
  try {
    const { imageUrl } = req.body;
    if (!imageUrl) {
      return res.status(BAD_REQUEST).json({ error: "Image URL required" });
    }
    const handleInputChange = e => {
      const { name, value } = e.target;
      setFormData(prev => {
        return {
          ...prev,
          [name]: value
        };
      });
    };
    // Upload image , get AI tags and Create Pin
    const handleImageUpload = async () => {
      if (!selectedFile) return;
      /*********************************************latest change 1* */
      if (!formData.title || !formData.description) {
        alert("Please fill in Title and Description");
        return;
      }

      setIsUploading(true);
      // setIsGeneratingTags(true);

      try {
        //-----------------------------------------------------------6
        const token = localStorage.getItem("authToken");
        console.log(token);
        if (!token) {
          alert("You must be logged in");
          setIsUploading(false);
          return;
        }
        // -------------------------------------6
        const formDataObj = new FormData();
        formDataObj.append("image", selectedFile);

        const response = await fetch(
          "http://localhost:4000/api/pins/uploadAndTag",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}` //-----------------7 added header field
            },
            body: formDataObj
          }
        );

        const result = await response.json();
        if (!result.success) {
          alert("Failed to upload image: " + result.error);
          setIsUploading(false);
          return;
        }

        setFormData(prev => ({
          ...prev,
          imageUrl: result.imageUrl,
          tags: result.tags
        }));
        /* ******************************* Create pin */
        const createPin = await fetch(
          "http://localhost:4000/api/pins/createpin",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({
              ...formData,
              imageUrl: result.imageUrl,
              tags: result.tags
            })
          }
        );

        const createdPin = await createPin.json();
        console.log("Created Pin Response:", createdPin);
        console.log(
          "createPin.status:",
          createPin.status,
          typeof createPin.status
        );
        console.log(
          "createdPin.success:",
          createdPin.success,
          typeof createdPin.success
        );

        if (createPin.status === 201) {
          console.log("in the success block");
          alert("Pin created successfully!");
          window.location.reload();
          return;
        } else {
          alert(
            "Failed to create pin: ??????" + createdPin.error || "unknown error"
          );
        }
      } catch (error) {
        console.error("Upload and create pin error:", error);
        alert("Failed to upload image and create pin*something went wrong");
      } finally {
        setIsUploading(false);
      }
    };
  } catch (error) {
    console.error("Error tagging from URL:", error);
    res.status(INTERNAL_SERVER_ERROR).json({ error: "Failed to create Pin" });
  }
};
