package app.messages;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
 import org.springframework.web.servlet.ModelAndView;
//
@Controller
@RequestMapping("/messages")
public class MessageController {

//  @GetMapping("/welcome")
////  @ResponseBody
//  public String welcome(Model model) {
//    model.addAttribute("message", "Hello, Welcome to Spring Boot!");
//    return "welcome";
////    return "<strong> Hello, Welcome to String boot! </strong>";
//  }

   @GetMapping("/welcome")
   public ModelAndView welcome() {
     ModelAndView mv = new ModelAndView("welcome");
     mv.addObject("message", "Hello, Welcome to Spring Boot!");
     return mv;
   }
}