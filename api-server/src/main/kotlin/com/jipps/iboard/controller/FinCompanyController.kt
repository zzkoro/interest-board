package com.jipps.iboard.controller

import com.jipps.iboard.dto.response.FinCompanyBaseResponse
import com.jipps.iboard.service.FinCompanyService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class FinCompanyController(
    private val finCompanyService: FinCompanyService
) {
    @GetMapping("/fss/company")
    fun getCompanyList(): List<FinCompanyBaseResponse> {
        return finCompanyService.getFinCompanyBase()
    }
}