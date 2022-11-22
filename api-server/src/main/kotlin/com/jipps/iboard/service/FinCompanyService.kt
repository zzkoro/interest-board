package com.jipps.iboard.service

import com.jipps.iboard.dto.response.FinCompanyBaseResponse
import com.jipps.iboard.repository.FinCompanyBaseRepository
import org.springframework.stereotype.Service
import org.springframework.transaction.annotation.Transactional

@Service
class FinCompanyService (
    private val finCompanyBaseRepository: FinCompanyBaseRepository
) {
    @Transactional(readOnly = true)
    fun getFinCompanyBase(): List<FinCompanyBaseResponse> {
        return finCompanyBaseRepository.getFinCompanyBase()
    }
}