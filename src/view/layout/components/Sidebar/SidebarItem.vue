<template>
	<div v-if="!item.hidden&&item.children" class="menu-wrapper">
		<router-link v-if="hasOneShowingChild(item.children) && !onlyOneChild.children && !item.alwaysShow">
			<el-menu-item :index="resolvePath(onlyOneChild.path)" :class="{'submenu-title-noDropdown':!isNest}">
				<svg-icon v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon"></svg-icon>
				<span v-if="onlyOneChild.meta&&onlyOneChild.meta.title" slot="title">{{generateTitle(onlyOneChild.meta.title)}}</span>
			</el-menu-item>
			
		</router-link>
		<el-submenu v-else :index="item.name||item.path">
				<template slot="title">
					<svg-icon v-if="onlyOneChild.meta&&onlyOneChild.meta.icon" :icon-class="onlyOneChild.meta.icon"></svg-icon>
					<span v-if="onlyOneChild.meta&&onlyOneChild.meta.title">{{generateTitle(onlyOneChild.meta.title)}}</span>
				</template>
				<template v-for="child in item.children" v-if="!child.hidden">
					<sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :item="child" :base-path="resolvePath(child.path)"></sidebar-item>
					<router-link v-else :to="resolvePath(child.path)" :key="child.name">
						<el-menu-item :index="resolvePath(child.path)">
							<svg-icon v-if="child.meta&&child.meta.icon" :icon-class="child.meta.icon"></svg-icon>
							<span v-if="child.meta&&child.meta.title">{{generateTitle(child.meta.title)}}</span>
						</el-menu-item>
					</router-link>
				</template>
			</el-submenu>
	</div>
</template>
<script>
	import path from 'path'
	import {generateTitle} from '@/utils/i18n'
	export default {
		name: "SidebarItem",
		props: {
			item: {
				type: Object,
				required: true
			},
			isNest: {
				type: Boolean,
				default: true
			},
			basePath: {
				type: String,
				default: ""
			}

		},
		data(){
			return {
				onlyOneChild: null
			}
		},
		methods: {
			hasOneShowingChild(children){
				const showingChildren = children.filter(item => {
					if(item.hidden){
						return false;
					}else{
						this.onlyOneChild = item;
						return true
					}
				})
				if(showingChildren.length === 1){
					return true
				} else {
					return false
				}
			},
			resolvePath(...paths){
				return path.resolve(this.basePath, ...paths)
			},
			generateTitle
		}
	}
</script>