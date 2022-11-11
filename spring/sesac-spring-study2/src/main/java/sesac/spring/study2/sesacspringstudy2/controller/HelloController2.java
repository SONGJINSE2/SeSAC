package sesac.spring.study2.sesacspringstudy2.controller;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HelloController2 {
    @GetMapping("str")
    public String getHi(Model model){
        model.addAttribute("text", "wow");
        return "str";
    }
    @GetMapping("hello")
    public String getHi2() { return "hi";}
}
