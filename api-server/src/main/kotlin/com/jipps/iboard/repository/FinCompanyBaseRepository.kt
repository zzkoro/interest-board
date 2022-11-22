package com.jipps.iboard.repository

import com.jipps.iboard.dto.response.FinCompanyBaseResponse
import com.jipps.iboard.domain.QFinCompanyBase.finCompanyBase
import com.querydsl.core.types.Projections
import com.querydsl.jpa.impl.JPAQueryFactory
import org.springframework.stereotype.Component

@Component
class FinCompanyBaseRepository(
    private val queryFactory: JPAQueryFactory,
) {
    fun getFinCompanyBase(): List<FinCompanyBaseResponse> {
        return queryFactory
            .select(
                Projections.constructor(
                    FinCompanyBaseResponse::class.java,
                    finCompanyBase.dclsMonth,
                    finCompanyBase.finCoNo,
                    finCompanyBase.korCoNm,
                    finCompanyBase.topFinGrpNo,
                    finCompanyBase.dclsChrgMan,
                    finCompanyBase.hompUrl,
                    finCompanyBase.calTel,
                )
            )
            .from(finCompanyBase)
            .orderBy(finCompanyBase.finCoNo.asc())
            .fetch()
    }
}