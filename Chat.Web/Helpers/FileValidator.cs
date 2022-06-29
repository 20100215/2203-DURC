using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;

namespace Chat.Web.Helpers
{
    public class FileValidator
    {
        public static bool ValidSize(int size)
        {
            // Maximum file size allowed: 2MB
            return (size < 2048000);
        }

        public static bool ValidType(string fileName)
        {
            var extenstion = Path.GetExtension(fileName).ToLowerInvariant();

            if (extenstion.Equals(".jpg") || 
                extenstion.Equals(".png") || 
                extenstion.Equals(".gif") || 
                extenstion.Equals(".jpeg"))
                return true;

            return false;
        }
    }
}