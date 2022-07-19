<template>
	<div>
		<div v-if="!complete" class="pt-5" style="min-height: 50vh">
            <div class="loading-spinner"></div>
        </div>
        <!-- section -->
		<div class="section pb-3 pt-3" v-if="complete">
			<!-- container -->
			<div class="container emp-profile">
			    <form method="post">
			        <div class="row">
			            <div class="col-md-4">
			                <div class="profile-img">
			                    <img :src="'images/users/avatar.jpg'" alt="avatar"/>
			                    <div class="file btn btn-lg btn-primary" v-if="login.id == user.id">
			                        Thay đổi ảnh đại diện
			                        <input type="file" name="file"/>
			                    </div>
			                </div>
			            </div>
			            <div class="col-md-6">
			                <div class="profile-head">
			                    <h2>
			                        {{ user.name }}
			                    </h2>
			                    <h6>
			                        Ngày tham gia: {{ convertDate(user.created_at)}}
			                    </h6>
			                    <p class="proile-rating">Điểm : <span>Đang cập nhật</span></p>
			                    <ul class="nav nav-tabs" id="myTab" role="tablist">
			                        <li class="nav-item">
			                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Thông tin</a>
			                        </li>
			                        <li class="nav-item">
			                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Hoạt động</a>
			                        </li>
			                        <li class="nav-item">
			                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#statistical" role="tab" aria-controls="statistical" aria-selected="false">Thống kê</a>
			                        </li>
			                    </ul>
			                </div>
			            </div>
			            <div class="col-md-2">
			                <input type="submit" class="profile-edit-btn" name="btnAddMore" value="Sửa thông tin"/>
			            </div>
			        </div>
			        <div class="row">
			            <div class="col-md-4">
			                <div class="profile-work">
			                   <!--  <p>WORK LINK</p>
			                    <a href="">Website Link</a><br/>
			                    <a href="">Bootsnipp Profile</a><br/>
			                    <a href="">Bootply Profile</a> -->
			                    <!-- <p>SKILLS</p>
			                    <a href="">Web Designer</a><br/>
			                    <a href="">Web Developer</a><br/>
			                    <a href="">WordPress</a><br/>
			                    <a href="">WooCommerce</a><br/>
			                    <a href="">PHP, .Net</a><br/> -->
			                </div>
			            </div>
			            <div class="col-md-8">
			                <div class="tab-content profile-tab" id="myTabContent">
			                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Tên tài khoản</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>{{ user.name }}</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Họ và tên</label>
			                            </div>
			                            <div class="col-md-6" v-if="user.display_name != null">
			                                <p>{{user.display_name}}</p>
			                            </div>
			                            <div class="col-md-6" v-else>
			                                <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Ngày sinh</label>
			                            </div>
			                            <div class="col-md-6" v-if="user.birthday != null">
			                                <p>{{user.birthday}}</p>
			                            </div>
			                            <div class="col-md-6" v-else>
			                                 <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Giới tính</label>
			                            </div>
			                            <div class="col-md-6" v-if="user.gender != null">
			                                <p>{{user.gender}}</p>
			                            </div>
			                            <div class="col-md-6" v-else>
			                                 <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Email</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>{{ user.email }}</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Điện thoại</label>
			                            </div>
			                            <div class="col-md-6" v-if="user.phone != null">
			                                 <p>{{user.phone}}</p>
			                            </div>
			                            <div class="col-md-6" v-else>
			                                 <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Địa chỉ</label>
			                            </div>
			                            <div class="col-md-6" v-if="user.address != null">
			                                 <p>{{user.address}}</p>
			                            </div>
			                            <div class="col-md-6" v-else>
			                                 <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Đang cập nhật</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                    </div>
			                    <div class="tab-pane fade" id="statistical" role="tabpanel" aria-labelledby="profile-tab">
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Bài viết</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Hình ảnh</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Video</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Lượt thích</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                        <div class="row">
			                            <div class="col-md-6">
			                                <label>Tài liệu</label>
			                            </div>
			                            <div class="col-md-6">
			                                <p>Đang cập nhật</p>
			                            </div>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </form>
			</div>
			<!-- /container -->
		</div>
		<!-- /section -->
	</div>
</template>


<script>
	export default {
		data() {
			return {
				user: {},
				complete: false,
				login: this.$store.state.ClientAuth.user
			}
		},
		created(){
			this.axios.get(`/api/user/profile-user/${this.$route.params.id}`).then((response) =>{
				this.user = response.data
			})
			this.complete = true
		},
		methods:{
			pad(s){
                return (s < 10) ? '0' + s : s;
            },
            convertDate(inputFormat) {
              var d = new Date(inputFormat);
              return [this.pad(d.getDate()), this.pad(d.getMonth()+1), d.getFullYear()].join('/');
            },
		}
	}
</script>


<style lang="css" scoped src="./../style/profile.css"></style>



