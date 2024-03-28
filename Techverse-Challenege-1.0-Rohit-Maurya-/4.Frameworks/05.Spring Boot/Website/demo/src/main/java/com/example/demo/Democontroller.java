// DemoController.java
package com.example.demo;

import org.springframework.core.io.ClassPathResource;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.io.InputStreamReader;

@RestController
public class Democontroller {

    @GetMapping("/")
    public String getIndexPage() throws IOException {
        // Load the index.html file from the classpath
        ClassPathResource resource = new ClassPathResource("static/index.html");
        
        // Read the content of the index.html file
        InputStreamReader reader = new InputStreamReader(resource.getInputStream());
        String content = FileCopyUtils.copyToString(reader);
        
        // Close the reader
        reader.close();
        
        // Return the content as the response
        return content;
    }
}
