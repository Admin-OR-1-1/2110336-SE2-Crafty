package uploadAPI

import (
	"io"

	"github.com/Admin-OR-1-1/2110336-SE2-Crafty/crafty-backend/internal/repository"
	"github.com/gofiber/fiber/v2"
)

type IUploadHandler interface {
  Upload(*fiber.Ctx) error
  Delete(*fiber.Ctx) error
}

type UploadHandler struct {
  repos *repository.Repositories
}

func NewUploadHandler(repos *repository.Repositories) IUploadHandler {
  return &UploadHandler{repos: repos}
}

func (h *UploadHandler) Upload(c *fiber.Ctx) error {
  isPublic := c.Query("public")
  userid := c.Locals("uid").(string)
  file, err := c.FormFile("file")
  if err != nil {
    return c.Status(400).JSON(fiber.Map{"message": "Upload failed", "error": err})
  }

  // Open the file
  src, err := file.Open()
  if err != nil {
      return c.Status(400).JSON(fiber.Map{"message": "Upload failed", "error": err})
  }
  defer src.Close()

  // Read the file contents into a []byte slice
  fileBytes, err := io.ReadAll(src)
  if err != nil {
      return c.Status(400).JSON(fiber.Map{"message": "Upload failed", "error": err})
  }
  // fileName := c.Params("filename")
  fileName := file.Filename
  if isPublic == "true" {
    fileName = "public/" + fileName
  } else {
    fileName = "private/" + userid + "/" + fileName
  }
  
  if err := h.repos.StorageRepository.UploadFile(fileBytes, fileName); err != nil {
    return c.Status(500).JSON(fiber.Map{"message": "Upload failed", "error": err})
  }
  return c.Status(200).JSON(fiber.Map{"message": "Upload success", "url": "https://cdn.kuranasaki.work/"+fileName})
}

func (h *UploadHandler) Delete(c *fiber.Ctx) error {
  // isPublic := c.Query("public")
  // userid := c.Locals("user").(string)
  fileName := c.Params("filename")
  // if isPublic == "true" {
  //   fileName = "public/" + fileName
  // } else {
  //   fileName = "private/" + userid + "/" + fileName
  // }
  // if err := h.repos.StorageRepository.DeleteFile(c, fileName); err != nil {
  //   return c.Status(500).JSON(fiber.Map{"message": "Delete failed", "error": err})
  // }
  return c.Status(500).JSON(fiber.Map{"message": "Delete not implement", "filename": fileName})
}