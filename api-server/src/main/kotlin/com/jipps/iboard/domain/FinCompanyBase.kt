package com.jipps.iboard.domain

import java.io.Serializable
import javax.persistence.Column
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.IdClass

@Entity
@IdClass(FinCompanyBaseId::class)
class FinCompanyBase(
    @Id
    @Column(name = "dcls_month")
    val dclsMonth: String,
    @Id
    @Column(name = "fin_co_no")
    val finCoNo: String,
    @Column(name = "kor_co_nm")
    val korCoNm: String,
    @Column(name = "top_fin_grp_no")
    val topFinGrpNo: String,
    @Column(name = "dcls_chrg_man")
    val dclsChrgMan: String,
    @Column(name = "homp_url")
    val hompUrl: String,
    @Column(name = "cal_tel")
    val calTel: String,
) {
    init {

    }
}

class FinCompanyBaseId (
    val dclsMonth: String,
    val finCoNo: String
): Serializable