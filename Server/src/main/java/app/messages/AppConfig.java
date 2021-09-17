package app.messages;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

import java.util.Arrays;

@Configuration
@ComponentScan("app.messages")
public class AppConfig {

    @Bean
    public FilterRegistrationBean<AuditingFilter> auditingFilterFilterRegistrationBean() {
        FilterRegistrationBean<AuditingFilter> registrationBean = new FilterRegistrationBean<>();
        AuditingFilter filter = new AuditingFilter();
        registrationBean.setFilter(filter); //filter 등록
        registrationBean.setOrder(Integer.MAX_VALUE); // filter 순서 맨마지막 배치
        registrationBean.setUrlPatterns(Arrays.asList("/messages/*")); //  filter 적용 경로 설정
        return registrationBean;
    }


}