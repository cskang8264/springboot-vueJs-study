package app.messages;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.filter.GenericFilterBean;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.Date;

@Slf4j
public class AuditingFilter extends GenericFilterBean {
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        long start = new Date().getTime();
        filterChain.doFilter(servletRequest, servletResponse); // 채이닝 -> 요청이 서블릿에 도달하기 전에 필터링
        long elapsed = new Date().getTime() - start;
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        log.debug("Request[uri = " + request.getRequestURI() + ", method="+ request.getMethod() + "] completed in " + elapsed + " ms");

    }
}









